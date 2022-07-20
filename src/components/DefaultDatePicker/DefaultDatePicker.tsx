import { DefaultDatePickerDay, DefaultDatePickerDayTypes, DefaultDatePickerProps } from './DefaultDatePicker.types';
import * as Styles from './DefaultDatePicker.styles';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { DefaultTextInput } from '../inputs';
import { IconArrow } from '@src/icons';
import { Keyboard } from 'react-native';

const DefaultDatePicker = ({ label = 'Date', onChange, testId = 'default-date-picker', value }: DefaultDatePickerProps) => {
  const [date, setDate] = useState(value);
  const [days, setDays] = useState<Array<DefaultDatePickerDay>>([]);
  const [month, setMonth] = useState(2);
  const [selected, setSelected] = useState<DefaultDatePickerDay | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [year, setYear] = useState(2022);

  const wrapperRef = useRef<View>(null);

  const monthNames = useMemo(() => {
    return [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
  }, []);
  const daysOfWeek = useMemo(() => ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'], []);
  const today = useMemo(() => new Date(), []);
  const monthName = monthNames[month];

  useEffect(() => {
    const currentDate = new Date(year, month);
    const days = Array<DefaultDatePickerDay>();

    const startsAt = currentDate.getUTCDay();
    const endsAt = new Date(year, month + 1, 0).getUTCDate();
    const prevEndsAt = new Date(year, month, 0).getUTCDate();

    let prevDaysCounter = prevEndsAt - (startsAt - 1);
    let currentDaysCounter = 1;
    let nextDaysCounter = 1;
    for(let i = 0; i < 42; i++) {
      // Previous month
      if (i<startsAt) {
        const day: DefaultDatePickerDay = {
          type: DefaultDatePickerDayTypes.PREVIOUS,
          value: prevDaysCounter
        };
        days.push(day);
        prevDaysCounter ++;
        continue;
      }

      // Next month
      if (currentDaysCounter>endsAt) {
        const day: DefaultDatePickerDay = {
          type: DefaultDatePickerDayTypes.NEXT,
          value: nextDaysCounter
        };
        days.push(day);
        nextDaysCounter ++;
        continue;
      }

      // Today
      if (currentDaysCounter === today.getUTCDate()) {
        const day: DefaultDatePickerDay = {
          type: DefaultDatePickerDayTypes.TODAY,
          value: currentDaysCounter
        };
        days.push(day);
        currentDaysCounter ++;
        continue;
      }

      // Current month
      const day: DefaultDatePickerDay = {
        type: DefaultDatePickerDayTypes.CURRENT,
        value: currentDaysCounter
      };
      days.push(day);
      currentDaysCounter ++;
    }

    setDays(days);
  }, [month, today, year]);

  const handlePrevMonth = useCallback(() => {
    let targetMonth = month - 1;
    if (targetMonth < 0) {
      setYear(year - 1);
      targetMonth = 11;
    }
    setMonth(targetMonth);
  }, [month, year]);

  const handleNextMonth = useCallback(() => {
    let targetMonth = month + 1;
    if (targetMonth >= 12) {
      setYear(year + 1);
      targetMonth = 0;
    }
    setMonth(targetMonth);
  }, [month, year]);

  const handleDayClick = useCallback((day) => {
    setSelected(day);
    setShowPicker(false);

    const parsedDay = day.value.toString().padStart(2, '0');
    const normalizedMonth = month + 1;
    const parsedMonth = normalizedMonth.toString().padStart(2, '0');
    const parsedDate = `${parsedDay}/${parsedMonth}/${year}`;
    setDate(parsedDate);

    onChange && onChange(parsedDate);
  }, [month, onChange, year]);

  const dayNamesMap = daysOfWeek.map((day, index) => {
    const key = `day-name-${index}`;
    return (
      <Styles.DayName key={key}>
        <Styles.DayNameLabel>{day}</Styles.DayNameLabel>
      </Styles.DayName>
    );
  });

  const daysMap = days.map((day: DefaultDatePickerDay, index: number) => {
    const isSelected = !!(selected && selected.type === day.type && selected.value === day.value);
    const key = `day-${index}-${day}`;
    const label = day.value.toString().padStart(2, '0');

    return (
      <Styles.ButtonDay
        dayType={day.type}
        key={key}
        onPress={() => handleDayClick(day)}
        selected={isSelected}
      >
        <Styles.ButtonDayLabel
          dayType={day.type}
          selected={isSelected}
        >
          {label}
        </Styles.ButtonDayLabel>
      </Styles.ButtonDay>
    );
  });

  const togglePiker = useCallback(() => {
    setShowPicker(!showPicker);
    Keyboard.dismiss();
  }, [showPicker]);

  return (
    <Styles.Wrapper data-testid={testId} ref={wrapperRef}>
      <DefaultTextInput
        editable={false}
        label={label}
        value={date}
      />
      <Styles.FieldOverlay onPress={togglePiker} />
      <Styles.PikerWrapper show={showPicker} pointerEvents={showPicker ? 'auto': 'none'}>
        <Styles.Navigation>
          <Styles.NavigationRightButtonAdapter onPress={handlePrevMonth}>
            <IconArrow />
          </Styles.NavigationRightButtonAdapter>
          <Styles.NavigationButton>
            <Text>{monthName} {year}</Text>
          </Styles.NavigationButton>
          <Styles.NavigationLeftButtonAdapter onPress={handleNextMonth}>
            <IconArrow />
          </Styles.NavigationLeftButtonAdapter>
        </Styles.Navigation>
        <Styles.DayNamesWrapper>
          {dayNamesMap}
        </Styles.DayNamesWrapper>
        <Styles.DaysWrapper>
          {daysMap}
        </Styles.DaysWrapper>
      </Styles.PikerWrapper>
    </Styles.Wrapper>
  );
};

export default DefaultDatePicker;

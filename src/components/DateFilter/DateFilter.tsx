import { DateFilterItem, DateFilterState, DateFilterProps } from './DateFilter.types';
import * as Styles from './DateFilter.styles';
import { Dimensions, FlatList, Text } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppDate } from '@src/types/common.types';

const DateFilter = ({ defaultDate = { day: 1, month: 1, year: 2022 }, onChange, testId = 'date-filter' }: DateFilterProps) => {
  const [state, setState] = useState<DateFilterState>({ data: [], flags: { ready: false }, index: 3 });

  const flatListRef = useRef<FlatList>(null);

  const ITEM_WIDTH = 130;

  const getPrevOptions = useCallback((option, amount): Array<DateFilterItem> => {
    const prevOptions = [];
    for(let i=1; i<=amount; i++) {
      const prev: DateFilterItem = {
        id: '0',
        month: 0,
        year: 0
      };
      prev.year = option.year;
      const totalMonth = option.month - i;
      prev.month = totalMonth;
      if (prev.month < 1) {
        const diff = totalMonth + 12;
        prev.month = diff;
        prev.year = option.year - 1;
      }
      prev.id = `${prev.month}${prev.year}`;
      prevOptions.unshift(prev);
    }
    return prevOptions;
  }, []);

  const getNextOptions = useCallback((option, amount): Array<DateFilterItem> => {
    const nextOptions = [];
    for(let i=1; i<=amount; i++) {
      const next: DateFilterItem = {
        id: '0',
        month: 0,
        year: 0
      };
      next.year = option.year;
      const totalMonth = option.month + i;
      next.month = totalMonth;
      if (next.month > 12) {
        const diff = totalMonth - 12;
        next.month = diff;
        next.year = option.year + 1;
      }
      next.id = `${next.month}${next.year}`;
      nextOptions.push(next);
    }
    return nextOptions;
  }, []);

  // Init
  useEffect(() => {
    if (state.data.length > 0) {
      return;
    }

    // console.log('Init');

    const { month, year } = defaultDate;
    const initialItem = { id: `${month}${year}`, month, year };
    let tempData = [initialItem];
    // Prev
    const prevOptions = getPrevOptions(initialItem, state.index);
    tempData = [...prevOptions, ...tempData];

    // Next
    const nextOptions = getNextOptions(initialItem, state.index);
    tempData = [...tempData, ...nextOptions];

    setState({ ...state, data: tempData, flags: { ready: true } });
  }, [defaultDate, getNextOptions, getPrevOptions, state]);

  // Position update
  useEffect(() => {
    if (!state.flags.ready || state.flags.positioning || state.data.length <= 0) {
      return;
    }

    const availableOptionsLeft = state.index;
    const availableOptionsRight = (state.data.length - 1) - state.index;

    const threshold = 2;
    const amountToCreate = 2;
    // console.log('Position check', `r: ${availableOptionsLeft} l: ${availableOptionsRight} s: ${state.data.length}`);

    if (availableOptionsLeft <= threshold) {
      const initialOption = state.data[state.index - availableOptionsLeft];
      const prevItems = getPrevOptions(initialOption, amountToCreate);
      const tempItems = [...prevItems, ...state.data];
      setState({ ...state, data: tempItems, index: state.index + amountToCreate, flags: { ...state.flags, positioning: true } });
    }

    if (availableOptionsRight <= threshold) {
      const initialOption = state.data[state.index + availableOptionsRight];
      const nextItems = getNextOptions(initialOption, amountToCreate);
      const tempItems = [...state.data, ...nextItems];
      setState({ ...state, data: tempItems, index: state.index, flags: { ...state.flags, positioning: true } });
    }
  }, [getNextOptions, getPrevOptions, state]);

  const handleScroll = useCallback((event) => {
    if (!state.flags.ready) {
      return;
    }
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(xOffset / ITEM_WIDTH);
    if (index === state.index) {
      return;
    }

    const item = state.data[index];
    const appDate: AppDate = {
      day: 1,
      month: item.month,
      year: item.year
    };
    onChange && onChange(appDate);

    setState({ ...state, index, flags: { ...state.flags, positioning: false } });
  }, [onChange, state]);

  const handleGetItemLayout = useCallback((data, index) => {
    return { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index };
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <Styles.BorderItem>
        <Text>Header</Text>
      </Styles.BorderItem>
    );
  }, []);

  const renderItem = useCallback(({ item, index }) => {
    const isCurrent = index === state.index;
    return (
      <Styles.Item isCurrent={isCurrent}>
        <Text>{`${item.month}/${item.year}`}</Text>
      </Styles.Item>
    );
  }, [state.index]);

  const renderFooter = useCallback(() => {
    return (
      <Styles.BorderItem>
        <Text>Footer</Text>
      </Styles.BorderItem>
    );
  }, []);

  return (
    <>
      <Styles.Wrapper data-testid={testId}>
        <Styles.Items
          data={state.data}
          decelerationRate="fast"
          getItemLayout={handleGetItemLayout}
          horizontal={true}
          initialScrollIndex={state.index}
          keyExtractor={(item) => (item as DateFilterItem).id}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={renderHeader}
          onMomentumScrollEnd={handleScroll}
          ref={flatListRef}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={Dimensions.get('window').width / 3}
          maintainVisibleContentPosition={{
            minIndexForVisible: 0,
          }}
        />
      </Styles.Wrapper>
    </>
  );
};

export default DateFilter;

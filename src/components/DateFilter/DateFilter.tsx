import { DateFilterItem, DateFilterState, DateFilterProps } from './DateFilter.types';
import * as Styles from './DateFilter.styles';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppDate } from '@src/types/common.types';

const DateFilter = ({ defaultDate = { day: 1, month: 1, year: 2022 }, onChange, testId = 'date-filter' }: DateFilterProps) => {
  const [state, setState] = useState<DateFilterState>(
    {
      data: [],
      flags: {
        ready: false
      },
      index: 3,
      settings: {
        itemsPerRow: 3,
        itemWidth: Dimensions.get('screen').width / 3,
        wrapperWidth: Dimensions.get('screen').width
      }
    }
  );

  const wrapperRef = useRef<View>(null);
  const flatListRef = useRef<FlatList>(null);

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

    const { month, year } = defaultDate;
    const initialItem = { id: `${month}${year}`, month, year };
    let tempData = [initialItem];
    // Prev
    const prevOptions = getPrevOptions(initialItem, state.index);
    tempData = [...prevOptions, ...tempData];

    // Next
    const nextOptions = getNextOptions(initialItem, state.index);
    tempData = [...tempData, ...nextOptions];

    setState({
      ...state,
      data: tempData,
      flags: { ready: false },
    });
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
    const index = Math.floor(xOffset / state.settings.itemWidth);
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
    return { length: state.settings.itemWidth, offset: state.settings.itemWidth * index, index };
  }, [state.settings.itemWidth]);

  const handleItemClick = useCallback((index: number) => {
    flatListRef.current && flatListRef.current.scrollToIndex({ animated: true, index });
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <Styles.BorderItem itemWidth={state.settings.itemWidth}>
        <Text>Header</Text>
      </Styles.BorderItem>
    );
  }, [state.settings.itemWidth]);

  const renderItem = useCallback(({ item, index }) => {
    const isCurrent = index === state.index;
    return (
      <Styles.Item
        isCurrent={isCurrent}
        itemWidth={state.settings.itemWidth}
        onPress={() => handleItemClick(index)}
      >
        <Text>{`${item.month}/${item.year}`}</Text>
      </Styles.Item>
    );
  }, [state.index, handleItemClick, state.settings.itemWidth]);

  const renderFooter = useCallback(() => {
    return (
      <Styles.BorderItem itemWidth={state.settings.itemWidth}>
        <Text>Footer</Text>
      </Styles.BorderItem>
    );
  }, [state.settings.itemWidth]);

  const handleOnLayout = useCallback((event) => {
    const { width } = event.nativeEvent.layout;
    const settings = {
      ...state.settings,
      itemWidth: width / state.settings.itemsPerRow,
      wrapperWidth: width
    };
    setState({
      ...state,
      settings,
      flags: { ...state.flags, ready: true },
    });
    flatListRef.current && flatListRef.current.scrollToIndex({ animated: false, index: 3 });
  }, [state]);

  return (
    <>
      <Styles.Wrapper
        ref={wrapperRef}
        data-testid={testId}
        onLayout={handleOnLayout}
      >
        <Styles.Items
          data={state.data}
          decelerationRate="fast"
          getItemLayout={handleGetItemLayout}
          horizontal={true}
          keyExtractor={(item) => (item as DateFilterItem).id}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={renderHeader}
          onMomentumScrollEnd={handleScroll}
          ref={flatListRef}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={state.settings.wrapperWidth / state.settings.itemsPerRow}
          maintainVisibleContentPosition={{
            minIndexForVisible: 0,
          }}
        />
      </Styles.Wrapper>
    </>
  );
};

export default DateFilter;

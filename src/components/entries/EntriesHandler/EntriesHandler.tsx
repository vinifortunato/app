import { useAppSelector } from '@src/hooks';
import { Entry } from '@store/entries/entries.types';
import { AppState } from '@store/store.types';
import { useCallback, useEffect, useState } from 'react';
import EntriesList from '../EntriesList';
import * as Styles from './EntriesHandler.styles';
import DateFilter from '@src/components/DateFilter';
import { AppDate } from '@src/types/common.types';
import { dateUtils } from '@src/utils';

const EntriesHandler = () => {
  const entries: Array<Entry> = useAppSelector<Array<Entry>>((state: AppState) => state.entries);

  const [filter, setFilter] = useState<AppDate>(dateUtils.today());
  const [filteredEntries, setFilteredEntries] = useState<Array<Entry>>([]);

  const filterEntriesByMonthAndYear = useCallback((entries: Array<Entry>, appDate: AppDate) => {
    const { month, year } = appDate;
    const filtered = entries.filter((entry) => {
      const date: AppDate = dateUtils.timestampToAppDate(entry.date);
      return date.month === month && date.year === year;
    });
    return filtered;
  }, []);

  useEffect(() => {
    const filtered = filterEntriesByMonthAndYear(entries, filter);
    setFilteredEntries(filtered);
  }, [filter, entries, filterEntriesByMonthAndYear]);

  const handleDateFilterChange = useCallback((appDate: AppDate) => {
    setFilter(appDate);
  }, []);

  return (
    <Styles.Wrapper data-testid="entries-handler">
      <Styles.Header>
        <DateFilter defaultDate={filter} onChange={handleDateFilterChange} />
      </Styles.Header>
      <EntriesList entries={filteredEntries} />
    </Styles.Wrapper>
  );
};

export default EntriesHandler;

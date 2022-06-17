import { ModalNewEntry } from '@src/modals';
import { useAppSelector } from '@src/hooks';
import { entriesActions } from '@store/entries';
import { Entry } from '@store/entries/entries.types';
import { AppState } from '@store/store.types';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import EntriesList from '../EntriesList';
import * as Styles from './EntriesHandler.styles';
import DateFilter from '@src/components/DateFilter';
import { AppDate } from '@src/types/common.types';
import { dateUtils } from '@src/utils';

const EntriesHandler = () => {
  const DEFAULT_DATE = dateUtils.today();

  const dispatch = useDispatch();

  const [modalNewEntryVisibility, setModalNewEntryVisibility] = useState(false);

  const entries: Array<Entry> = useAppSelector<Array<Entry>>((state: AppState) => state.entries);
  const [filteredEntries, setFilteredEntries] = useState<Array<Entry> | undefined>(undefined);

  const filterEntriesByMonthAndYear = useCallback((entries: Array<Entry>, appDate: AppDate) => {
    const { month, year } = appDate;
    const filtered = entries.filter((entry) => {
      const date: AppDate = dateUtils.timestampToAppDate(entry.date);
      return date.month === month && date.year === year;
    });
    return filtered;
  }, []);

  useEffect(() => {
    if (filteredEntries) {
      return;
    }

    const filtered = filterEntriesByMonthAndYear(entries, DEFAULT_DATE);
    setFilteredEntries(filtered);
  }, [DEFAULT_DATE, entries, filterEntriesByMonthAndYear, filteredEntries]);

  const toggleNewEntryModal = useCallback(() => {
    setModalNewEntryVisibility(!modalNewEntryVisibility);
  }, [modalNewEntryVisibility]);

  const handleNewEntrySubmit = useCallback((entry: Entry) => {
    dispatch(entriesActions.add(entry));
    toggleNewEntryModal();
  }, [dispatch, toggleNewEntryModal]);

  const handleDateFilterChange = useCallback((appDate: AppDate) => {
    const filtered = filterEntriesByMonthAndYear(entries, appDate);

    setFilteredEntries(filtered);
  }, [entries, filterEntriesByMonthAndYear]);

  return (
    <Styles.Wrapper data-testid="entries-handler">
      <Styles.Header>
        <DateFilter defaultDate={DEFAULT_DATE} onChange={handleDateFilterChange} />
        <Button title="Novo Lançamento" onPress={toggleNewEntryModal} />
      </Styles.Header>
      <EntriesList entries={filteredEntries} />
      <ModalNewEntry
        onCancel={toggleNewEntryModal}
        onSubmit={handleNewEntrySubmit}
        visible={modalNewEntryVisibility}
      />
    </Styles.Wrapper>
  );
};

export default EntriesHandler;

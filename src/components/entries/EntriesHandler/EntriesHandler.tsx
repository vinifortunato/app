import { ModalNewEntry } from '@src/components/modals';
import { useAppSelector } from '@src/hooks';
import { arraysEqual } from '@src/utils';
import { entriesActions } from '@store/entries';
import { Entry } from '@store/entries/entries.types';
import { AppState } from '@store/store.types';
import { useCallback, useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import EntriesList from '../EntriesList';
import * as Styles from './EntriesHandler.styles';

const EntriesHandler = () => {
  const dispatch = useDispatch();

  const [modalNewEntryVisibility, setModalNewEntryVisibility] = useState(false);

  const entries: Array<Entry> = useAppSelector<Array<Entry>>((state: AppState) => state.entries);
  const [filteredEntries, setFilteredEntries] = useState<Array<Entry>>(entries);

  useEffect(() => {
    if (arraysEqual({ a: entries, b: filteredEntries })) {
      return;
    }

    setFilteredEntries(entries);
  }, [entries, filteredEntries]);

  const toggleNewEntryModal = useCallback(() => {
    setModalNewEntryVisibility(!modalNewEntryVisibility);
  }, [modalNewEntryVisibility]);

  const handleNewEntrySubmit = useCallback((entry: Entry) => {
    dispatch(entriesActions.add(entry));
    toggleNewEntryModal();
  }, [dispatch, toggleNewEntryModal]);
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Text>Lançamentos</Text>
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

import { useAppSelector } from '@src/hooks';
import { Entry } from '@store/entries/entries.types';
import { AppState } from '@store/store.types';
import { useCallback, useMemo, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { entriesActions } from '@store/entries';
import { ScreenStyles } from '../styles';
import { ModalNewEntry } from '@src/components/modals';

const EntriesScreen = () => {
  const dispatch = useDispatch();

  const [modalNewEntryVisibility, setModalNewEntryVisibility] = useState(false);

  const entries: Array<Entry> = useAppSelector<Array<Entry>>((state: AppState) => state.entries);

  const entriesMap = useMemo(() => entries.map((entry: Entry) => {
    const key = `entry-${entry.id}`;
    return (
      <View key={key}>
        <Text>{entry.title}</Text>
      </View>
    );
  }), [entries]);

  const handleNewEntrySubmit = useCallback((entry: Entry) => {
    dispatch(entriesActions.add(entry));
  }, [dispatch]);

  const toggleNewEntryModal = useCallback(() => {
    setModalNewEntryVisibility(!modalNewEntryVisibility);
  }, [modalNewEntryVisibility]);

	return (
    <ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <View>
          <Text>Lançamentos</Text>
          <Button title="Novo Lançamento" onPress={toggleNewEntryModal} />
          <View>
            {entriesMap}
          </View>
        </View>
        <ModalNewEntry
          onCancel={toggleNewEntryModal}
          onSubmit={handleNewEntrySubmit}
          visible={modalNewEntryVisibility}
        />
      </ScreenStyles.Container>
    </ScreenStyles.Wrapper>
	);
};

export default EntriesScreen;

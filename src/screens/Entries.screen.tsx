import { ScreenStyles } from '@src/styles';
import { EntriesHandler } from '@src/components/entries';
import { ScreenProps } from '@src/types/screen.types';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Button } from 'react-native';
import { ModalNewEntry } from '@src/modals';
import { Entry } from '@store/entries/entries.types';
import { entriesActions } from '@store/entries';
import { useDispatch } from 'react-redux';

const EntriesScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const [modalNewEntryVisibility, setModalNewEntryVisibility] = useState(false);

  const toggleNewEntryModal = useCallback(() => {
    setModalNewEntryVisibility(!modalNewEntryVisibility);
  }, [modalNewEntryVisibility]);

  const handleNewEntryButtonClick = useCallback(() => {
    toggleNewEntryModal();
  }, [toggleNewEntryModal]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleNewEntryButtonClick} title="Novo" />
      ),
    });
  }, [handleNewEntryButtonClick, navigation]);

  const handleNewEntrySubmit = useCallback((entry: Entry) => {
    dispatch(entriesActions.add(entry));
    toggleNewEntryModal();
  }, [dispatch, toggleNewEntryModal]);

	return (
    <ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <EntriesHandler />
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

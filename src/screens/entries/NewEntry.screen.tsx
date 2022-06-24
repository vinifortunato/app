import { DefaultTextInput } from '@src/components/inputs';
import { ScreenStyles } from '@src/styles';
import { ScreenProps } from '@src/types/screen.types';
import { dateUtils } from '@src/utils';
import { entriesActions } from '@store/entries';
import { Entry, EntryStatus, EntryTypes } from '@store/entries/entries.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';

const NewEntryScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      amount: '',
      company: '',
      date: '05/05/2022',
      notes: '',
      status: EntryStatus.PAID,
      title: '',
      type: EntryTypes.REVENUE,
    }
  });

  const handleSubmitEntry = useCallback(({ amount, date: rawDate, notes, status, title, type }) => {
    const date = dateUtils.dateToTimestamp(rawDate).toString();
    const entry: Entry = {
      amount,
      createdAt: '',
      date,
      id: '0',
      notes,
      status,
      title,
      type,
      updatedAt: '',
    };

    dispatch(entriesActions.add(entry));
  }, [dispatch]);

  const handleOnCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScreenStyles.ModalWrapper>
      <ScreenStyles.ModalCloseTab onPress={handleOnCancel} />
      <View>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Título"
                onChange={onChange}
                placeholder="Título"
                testId="text-input-title"
                value={value}
              />
            );
          }}
        />
        <Controller
          name="amount"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Valor"
                onChange={onChange}
                placeholder="Valor"
                testId="text-input-value"
                value={value}
              />
            );
          }}
        />
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Data"
                onChange={onChange}
                placeholder="Data"
                testId="text-input-date"
                value={value}
              />
            );
          }}
        />
        <Controller
          name="status"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Estado"
                onChange={onChange}
                placeholder="Estado"
                testId="text-input-status"
                value={value}
              />
            );
          }}
        />
        <Controller
          name="type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Tipo"
                onChange={onChange}
                placeholder="Tipo"
                testId="text-input-type"
                value={value}
              />
            );
          }}
        />
        <Controller
          name="notes"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Observações"
                onChange={onChange}
                placeholder="Observações"
                testId="text-input-notes"
                value={value}
              />
            );
          }}
        />
        <Button title="Submit" onPress={handleSubmit(handleSubmitEntry)} />
      </View>
    </ScreenStyles.ModalWrapper>
  );
};

export default NewEntryScreen;

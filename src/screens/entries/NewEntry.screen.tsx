import { DefaultDatePicker } from '@src/components';
import { DefaultTextInput } from '@src/components/inputs';
import { ScreenStyles } from '@src/styles';
import { ScreenProps } from '@src/types/screen.types';
import { dateUtils } from '@src/utils';
import { entriesActions } from '@store/entries';
import { Entry, EntryStatus, EntryTypes } from '@store/entries/entries.types';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'react-native';
import { formatWithMask, Masks } from 'react-native-mask-input';
import { useDispatch } from 'react-redux';

const NewEntryScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const today = dateUtils.today();

  const currencyFormatOptions = useMemo(() => ({
      mask: Masks.BRL_CURRENCY,
  }), []);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      amount: '',
      company: '',
      date: dateUtils.appDateToString(today),
      notes: '',
      status: EntryStatus.PAID,
      title: '',
      type: EntryTypes.REVENUE,
    }
  });

  const handleSubmitEntry = useCallback(({ amount: rawAmount, date: rawDate, notes: rawNotes, status: rawStatus, title: rawTitle, type: rawType }) => {
      const { unmasked: unmaskedAmount } = formatWithMask({ ...currencyFormatOptions, text: rawAmount || '0' });
      const date = dateUtils.dateToTimestamp(rawDate).toString();
      const entry: Entry = {
        amount: unmaskedAmount,
        createdAt: '',
        date: date,
        id: '0',
        notes: rawNotes || '',
        status: rawStatus || EntryStatus.PAID,
        title: rawTitle || '',
        type: rawType || EntryTypes.REVENUE,
        updatedAt: '',
      };

      dispatch(entriesActions.add(entry));
  }, [dispatch, currencyFormatOptions]);

  const handleOnCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScreenStyles.ModalWrapper>
      <ScreenStyles.ModalCloseTab onPress={handleOnCancel} />
      <ScreenStyles.ModalContainer>
        <Controller
          name="title"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
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
          rules={{ required: false }}
          render={({ field }) => {
            const { onChange, value } = field;
            const { masked } = formatWithMask({ ...currencyFormatOptions, text: `${value}` });

            return (
              <DefaultTextInput
                label="Valor"
                onChange={onChange}
                placeholder="Valor"
                testId="text-input-value"
                value={masked}
              />
            );
          }}
        />
        <Controller
          name="date"
          control={control}
          rules={{ required: false }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultDatePicker
                label="Data"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <Controller
          name="status"
          control={control}
          rules={{ required: false }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
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
          rules={{ required: false }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
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
          rules={{ required: false }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
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
      </ScreenStyles.ModalContainer>
    </ScreenStyles.ModalWrapper>
  );
};

export default NewEntryScreen;

import { Entry, EntryStatus, EntryTypes } from '@store/entries/entries.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Modal as NativeModal, Pressable, Text, View } from 'react-native';
import { ModalNewEntryProps } from './ModalNewEntry.types';
import * as Styles from './ModalNewEntry.styles';
import { DefaultTextInput } from '@src/components/inputs';
import { dateUtils } from '@src/utils';

const ModalNewEntry = ({ onCancel, onSubmit, visible = false }: ModalNewEntryProps) => {
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

    onSubmit && onSubmit(entry);
  }, [onSubmit]);

  const handleOnCancel = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  return (
    <NativeModal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Title>Novo Lançamento</Styles.Title>
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
          <Pressable onPress={handleOnCancel}>
            <Text>Hide Modal</Text>
          </Pressable>
        </Styles.Container>
      </Styles.Wrapper>
    </NativeModal>
  );
};

export default ModalNewEntry;

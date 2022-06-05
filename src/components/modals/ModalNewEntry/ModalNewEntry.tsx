import { Entry, EntryStatus, EntryTypes } from '@store/entries/entries.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Modal as NativeModal, Pressable, Text, TextInput, View } from 'react-native';
import { ModalNewEntryProps } from './ModalNewEntry.types';
import * as Styles from './ModalNewEntry.styles';
import { dateToTimestamp } from '@src/utils';

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
    const date = dateToTimestamp({ rawDate }).toString();
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
          <Text>Novo Lançamento</Text>
          <View>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Título" />}
            />
            <Controller
              name="amount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Valor" />}
            />
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Data" />}
            />
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Estado" />}
            />
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Tipo" />}
            />
            <Controller
              name="notes"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Observações" />}
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

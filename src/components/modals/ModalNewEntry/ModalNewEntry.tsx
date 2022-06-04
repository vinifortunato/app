import { Entry } from '@store/entries/entries.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Modal as NativeModal, Pressable, Text, TextInput, View } from 'react-native';
import { ModalNewEntryProps } from './ModalNewEntry.types';
import * as Styles from './ModalNewEntry.styles';

const ModalNewEntry = ({ onCancel, onSubmit, visible = false }: ModalNewEntryProps) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: '',
      amount: '',
      type: 'revenue'
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitEntry = useCallback((data: any) => {
    const entry: Entry = {
      id: '0',
      title: data.title,
      type: data.type,
      amount: data.amount
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
              render={({ field }) => <TextInput {...field} placeholder="title" />}
            />
            <Controller
              name="amount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="amount" />}
            />
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="type" />}
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

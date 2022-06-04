import { useAppSelector } from '@src/hooks';
import { Entry } from '@store/entries/entries.types';
import { AppState } from '@store/store.types';
import { useCallback } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { entriesActions } from '@store/entries';
import { ScreenStyles } from '../styles';

const EntriesScreen = () => {
  const dispatch = useDispatch();

  const entries: Array<Entry> = useAppSelector<Array<Entry>>((state: AppState) => state.entries);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: '',
      amount: '',
      type: 'revenue'
    }
  });

  const onSubmit = useCallback((data) => {
    console.log(data);

    const entry: Entry = {
      id: '0',
      title: data.title,
      type: data.type,
      amount: data.amount
    };

    dispatch(entriesActions.add(entry));
  }, []);

  const entriesMap = entries.map((entry: Entry) => {
    const key = `entry-${entry.id}`;
    return (
      <View key={key}>
        <Text>{entry.title}</Text>
      </View>
    );
  });

  const handleNewEntryClick = useCallback(() => {
    console.log('aaa');
  }, []);

	return (
    <ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <View>
          <Text>Entries</Text>
          <View>
            {entriesMap}
          </View>
          <Button title="New entry" onPress={handleNewEntryClick} />
        </View>
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
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScreenStyles.Container>
    </ScreenStyles.Wrapper>
	);
};

export default EntriesScreen;

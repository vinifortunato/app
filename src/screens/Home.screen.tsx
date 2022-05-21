
import { useAppSelector } from '@src/hooks';
import { AppState } from '@store/store.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: 'Vinicius',
    }
  });

  const onSubmit = useCallback((data) => {
    console.log(data);

    const user: User = {
      name: data.name
    };

    dispatch(userActions.setUser(user));
  }, []);

	return (
		<View>
      {user ? (
        <Text>{`Hello ${user.name}!`}</Text>
      ) : (
        <View>
          <Text>Welcome!</Text>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextInput {...field} />}
          />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      )}
		</View>
	);
};

export default HomeScreen;

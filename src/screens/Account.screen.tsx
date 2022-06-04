import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { AppState } from '@store/store.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

const AccountScreen = () => {
  const dispatch = useDispatch();

  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: user?.name,
    }
  });

  const onSubmit = useCallback((data) => {
    console.log(data);

    const user: User = {
      name: data.name
    };

    dispatch(userActions.set(user));
  }, []);

	return (
		<ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <Text>Account</Text>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextInput {...field} />}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScreenStyles.Container>
		</ScreenStyles.Wrapper>
	);
};

export default AccountScreen;



import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { AppState } from '@store/store.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScreenProps } from './Screen.types';

const HomeScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: 'Vinicius',
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = useCallback((data: any) => {
    const user: User = {
      name: data.name
    };

    dispatch(userActions.set(user));
  }, [dispatch]);

  const handleMyAccountClick = useCallback(() => {
    navigation.navigate('Account');
  }, [navigation]);

  const handleEntriesClick = useCallback(() => {
    navigation.navigate('Entries');
  }, [navigation]);

	return (
		<ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        {user ? (
          <View>
            <Text>{`Hello ${user.name}!`}</Text>
            <Button
              title="Minha conta"
              onPress={handleMyAccountClick}
            />
            <Button
              title="Lançamentos"
              onPress={handleEntriesClick}
            />
          </View>
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
      </ScreenStyles.Container>
		</ScreenStyles.Wrapper>
	);
};

export default HomeScreen;

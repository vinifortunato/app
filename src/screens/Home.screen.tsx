

import { DefaultTextInput } from '@src/components/inputs';
import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { AppState } from '@store/store.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScreenProps } from '../types/screen.types';

const HomeScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
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
            <Text>{`Olá ${user.name}!`}</Text>
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
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                const { onChange, value } = field;
                return (
                  <DefaultTextInput
                    editable={true}
                    label="Olá, como devemos chamá-lo?"
                    onChange={onChange}
                    placeholder="Nome"
                    testId="text-input-name"
                    value={value}
                  />
                );
              }}
            />
            <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
          </View>
        )}
      </ScreenStyles.Container>
		</ScreenStyles.Wrapper>
	);
};

export default HomeScreen;

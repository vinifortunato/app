

import { DefaultTextInput } from '@src/components/inputs';
import ResumeHandler from '@src/components/ResumeHandler';
import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { AppState } from '@store/store.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, View } from 'react-native';
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
          <ResumeHandler
            handleMyAccountClick={handleMyAccountClick}
            handleEntriesClick={handleEntriesClick}
          />
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
                    label="Como devemos chamá-lo?"
                    onChange={onChange}
                    placeholder="Digite seu nome ou apelido"
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

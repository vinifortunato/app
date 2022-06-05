import { DefaultTextInput } from '@src/components/inputs';
import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { AppState } from '@store/store.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';

const AccountScreen = () => {
  const dispatch = useDispatch();

  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: user?.name,
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = useCallback((data: any) => {
    const user: User = {
      name: data.name
    };

    dispatch(userActions.set(user));
  }, [dispatch]);

	return (
		<ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <DefaultTextInput
                editable={true}
                label="Nome"
                onChange={onChange}
                placeholder="Nome"
                testId="text-input-name"
                value={value}
              />
            );
          }}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScreenStyles.Container>
		</ScreenStyles.Wrapper>
	);
};

export default AccountScreen;

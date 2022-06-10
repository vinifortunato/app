import { OnboardingHandlerProps } from './OnboardingHandler.types';
import * as Styles from './OnboardingHandler.styles';
import { Controller, useForm } from 'react-hook-form';
import { DefaultTextInput } from '../inputs';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { User } from '@store/user/user.types';
import { userActions } from '@store/user';

const OnboardingHandler = ({ testId = 'default' }: OnboardingHandlerProps) => {
  const dispatch = useDispatch();

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

  return (
    <Styles.Wrapper data-testid={testId}>
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
    </Styles.Wrapper>
  );
};

export default OnboardingHandler;

import { OnboardingHandler, ResumeHandler } from '@src/components';
import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { ScreenProps } from '@src/types/screen.types';
import { AppState } from '@store/store.types';
import { User } from '@store/user/user.types';
import { useCallback, useLayoutEffect } from 'react';
import { Button } from 'react-native';

const HomeScreen = ({ navigation }: ScreenProps) => {
  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

  const handleAccountButtonClick = useCallback(() => {
    navigation.navigate('Account');
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleAccountButtonClick} title="Account" />
      ),
    });
  }, [handleAccountButtonClick, navigation]);

	return (
		<ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        {user ? (
          <ResumeHandler />
        ) : (
          <OnboardingHandler />
        )}
      </ScreenStyles.Container>
    </ScreenStyles.Wrapper>
  );
};

export default HomeScreen;

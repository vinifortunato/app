import { BottomTabs, OnboardingHandler } from '@src/components';
import ResumeHandler from '@src/components/ResumeHandler';
import { useAppSelector } from '@src/hooks';
import { ScreenStyles } from '@src/styles';
import { AppState } from '@store/store.types';
import { User } from '@store/user/user.types';

const HomeScreen = () => {
  const user: User | null = useAppSelector<User| null>((state: AppState) => state.user);

	return (
		<ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        {user ? (
          <ResumeHandler />
        ) : (
          <OnboardingHandler />
        )}
      </ScreenStyles.Container>
      <BottomTabs />
    </ScreenStyles.Wrapper>
  );
};

export default HomeScreen;

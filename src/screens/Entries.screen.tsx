import { ScreenStyles } from '@src/styles';
import { EntriesHandler } from '@src/components/entries';
import { BottomTabs } from '@src/components';

const EntriesScreen = () => {
	return (
    <ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <EntriesHandler />
      </ScreenStyles.Container>
      <BottomTabs />
    </ScreenStyles.Wrapper>
	);
};

export default EntriesScreen;

import { ScreenStyles } from '@src/styles';
import { EntriesHandler } from '@src/components/entries';

const EntriesScreen = () => {
	return (
    <ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <EntriesHandler />
      </ScreenStyles.Container>
    </ScreenStyles.Wrapper>
	);
};

export default EntriesScreen;

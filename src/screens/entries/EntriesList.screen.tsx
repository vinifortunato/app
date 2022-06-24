import { EntriesHandler } from '@src/components/entries';
import { ScreenStyles } from '@src/styles';

const EntriesListScreen = () => {
  return (
    <ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <EntriesHandler />
      </ScreenStyles.Container>
    </ScreenStyles.Wrapper>
  );
};

export default EntriesListScreen;

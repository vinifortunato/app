import { BottomTabsProps } from './BottomTabs.types';
import * as Styles from './BottomTabs.styles';
import { Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const BottomTabs = ({ testId = 'bottom-tabs' }: BottomTabsProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const navigateTo = (routeName: string) => {
    navigation.navigate(routeName as never, {} as never);
  };

  return (
    <Styles.Wrapper data-testid={testId} insets={insets}>
      <Styles.Container>
          <Button
            title="Home"
            onPress={() => navigateTo('Home')}
          />
          <Button
            title="Lançamentos"
            onPress={() => navigateTo('Entries')}
          />
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default BottomTabs;

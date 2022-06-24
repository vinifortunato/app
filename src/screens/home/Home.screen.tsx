import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenProps } from '@src/types/screen.types';
import { useCallback, useLayoutEffect } from 'react';
import { Button } from 'react-native';
import AccountScreen from './Account.screen';
import ResumeScreen from './Resume.screen';

const HomeScreen = ({ navigation }: ScreenProps) => {
  const Stack = createNativeStackNavigator();

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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Resume"
        component={ResumeScreen}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Account"
          component={AccountScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeScreen;

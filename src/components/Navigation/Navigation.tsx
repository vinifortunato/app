import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AccountScreen, HomeScreen } from '@src/screens';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: 'Account' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

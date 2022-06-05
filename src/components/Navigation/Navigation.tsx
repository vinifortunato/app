import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AccountScreen, EntriesScreen, HomeScreen, SplashScreen } from '@src/screens';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => null,
            title: 'Visão Geral',
          }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Meus dados'
          }}
        />
        <Stack.Screen
          name="Entries"
          component={EntriesScreen}
          options={{
            title: 'Lançamentos'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

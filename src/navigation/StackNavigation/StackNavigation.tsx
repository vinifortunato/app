import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AccountScreen, EntriesScreen, HomeScreen } from '@src/screens';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Visão Geral',
          }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Meus dados',
            headerBackTitle: ''
          }}
        />
        <Stack.Screen
          name="Entries"
          component={EntriesScreen}
          options={{
            title: 'Lançamentos',
            headerBackTitle: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

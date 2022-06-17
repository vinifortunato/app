import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AccountScreen, EntriesScreen, HomeScreen } from '@src/screens';

const BottomTabNavigator = () => {
  const BottomTabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Visão Geral',
          }}
        />
        <BottomTabNavigator.Screen
          name="Entries"
          component={EntriesScreen}
          options={{
            title: 'Lançamentos',
          }}
        />
        <BottomTabNavigator.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Meus dados',
          }}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

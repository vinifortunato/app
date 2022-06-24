import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { EntriesScreen, HomeScreen } from '@src/screens';

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
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

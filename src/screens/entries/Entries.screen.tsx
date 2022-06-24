import { ScreenProps } from '@src/types/screen.types';
import { useCallback, useLayoutEffect } from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntriesListScreen from './EntriesList.screen';
import NewEntryScreen from './NewEntry.screen';

const EntriesScreen = ({ navigation }: ScreenProps) => {
  const Stack = createNativeStackNavigator();

  const handleNewEntryButtonClick = useCallback(() => {
    navigation.navigate('NewEntry');
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleNewEntryButtonClick} title="Novo" />
      ),
    });
  }, [handleNewEntryButtonClick, navigation]);

	return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="EntriesList"
        component={EntriesListScreen}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="NewEntry"
          component={NewEntryScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
	);
};

export default EntriesScreen;

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeScreen } from './screens';
import * as React from 'react';

const App = () => {

	return (
		<View>
			<StatusBar style="auto" />
			<HomeScreen />
		</View>
	);
};

export default App;

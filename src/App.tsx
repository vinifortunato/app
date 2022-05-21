import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeScreen } from './screens';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<View>
				<StatusBar style="auto" />
        <HomeScreen />
			</View>
		</Provider>
	);
};

export default App;

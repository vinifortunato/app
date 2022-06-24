import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store';
import { defaultTheme } from './themes';
import { SplashHandler } from './components';
import { BottomTabNavigator } from './navigation';

const App = () => {
	return (
		<Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <SplashHandler />
          <BottomTabNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
		</Provider>
	);
};

export default App;

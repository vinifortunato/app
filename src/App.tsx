import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { StackNavigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store';
import { defaultTheme } from './themes';

const App = () => {
	return (
		<Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <StackNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
		</Provider>
	);
};

export default App;

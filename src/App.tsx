import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './components';
import store from './store';
import { defaultTheme } from './themes';

const App = () => {
	return (
		<Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Navigation />
      </ThemeProvider>
		</Provider>
	);
};

export default App;

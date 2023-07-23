import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import Header from './components/Header/Header';
import SignIn from './pages/SignIn/SignIn';
import { DisplayTheme } from './types/globalTypes';
import style from './App.module.sass';

function App() {
	let theme = createTheme({
		typography: {
			fontFamily: 'Helvetica, Sans-Serif',
		},
		palette: {
			primary: {
				main: style.teal300,
			},
		},
	});
	theme = responsiveFontSizes(theme);

	return (
		<ThemeProvider theme={theme}>
			<SignIn />
		</ThemeProvider>
	);
}

export default App;

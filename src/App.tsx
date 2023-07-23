import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
//SASS
import style from './App.module.sass';
import Loading from './components/Loading/Loading';
//Components
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));

const router = createBrowserRouter([
	{
		path: '/sign-in',
		element: (
			<Suspense fallback={<Loading />}>
				<SignIn />
			</Suspense>
		),
	},
]);

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
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;

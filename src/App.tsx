import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
//SASS
import style from './App.module.sass';
import { Tabs } from './types/globalTypes';
import MainPageWrapper from './pages/MainPageWrapper/MainPageWrapper';
import Loading from './components/Loading/Loading';

//Components
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const ErrorPage = lazy(() => import('./components/Error/Error'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: `/${Tabs.SIGNIN}`,
		element: (
			<Suspense fallback={<Loading />}>
				<SignIn />
			</Suspense>
		),
	},
	{
		path: `/${Tabs.SIGNUP}`,
		element: (
			<Suspense fallback={<Loading />}>
				<SignUp />
			</Suspense>
		),
	},
	{
		path: `/pages/${Tabs.DASHBOARD}`,
		element: (
			<Suspense fallback={<Loading />}>
				<MainPageWrapper />
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
			secondary: {
				main: style.white,
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

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
//SASS
import style from './App.module.sass';

//Components
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Loading = lazy(() => import('./components/Loading/Loading'));
const ErrorPage = lazy(() => import('./components/Error/Error'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/sign-in',
		element: (
			<Suspense fallback={<Loading />}>
				<SignIn />
			</Suspense>
		),
	},
	{
		path: '/sign-up',
		element: (
			<Suspense fallback={<Loading />}>
				<SignUp />
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

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
//SASS
import style from './App.module.sass';
import { MainPageNavTabs, Tabs } from './types/globalTypes';
import MainPageWrapper from './pages/MainPageWrapper/MainPageWrapper';
import Loading from './components/Loading/Loading';

//Components
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const ErrorPage = lazy(() => import('./components/Error/Error'));

const router = createBrowserRouter([
	{
		path: '*',
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
		errorElement: <ErrorPage />,
	},
	{
		path: `/${Tabs.SIGNUP}`,
		element: (
			<Suspense fallback={<Loading />}>
				<SignUp />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: `/pages/${MainPageNavTabs.DASHBOARD}`,
		element: (
			<Suspense fallback={<Loading />}>
				<MainPageWrapper children={<Dashboard />} />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: `/pages/${MainPageNavTabs.TABLES}`,
		element: (
			<Suspense fallback={<Loading />}>
				<MainPageWrapper children={<Dashboard />} />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
]);

const App = () => {
	let theme = createTheme({
		typography: {
			fontFamily: 'Helvetica, Sans-Serif',
			fontWeightRegular: 700,
			fontWeightMedium: 500,
			fontWeightLight: 400,
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
};

export default App;

import { lazy, Suspense, useEffect } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
//SASS
import style from './App.module.sass';

//Types
import { MainPageNavTabs, Tabs } from './types/globalTypes';

//Components
import Loading from './components/Loading/Loading';
import ErrorPage from './components/Error/Error';
import { globalCache, preloadImages } from './constant/utils';
import { Images, LogosImage, MainPageNavLogo } from './constant/mockData';

//Lazy Components
const MainPageWrapper = lazy(
	() => import('./pages/MainPageWrapper/MainPageWrapper'),
);
const TablesPage = lazy(() => import('./pages/TablesPage/TablesPage'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to={`/pages/${MainPageNavTabs.DASHBOARD}`} />,
		errorElement: <ErrorPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: `/${Tabs.SIGNIN}`,
		element: (
			<Suspense fallback={<Loading showLoadingText={true} />}>
				<SignIn />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: `/${Tabs.SIGNUP}`,
		element: (
			<Suspense fallback={<Loading showLoadingText={true} />}>
				<SignUp />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: `/pages/${MainPageNavTabs.DASHBOARD}`,
		element: (
			<Suspense fallback={<Loading showLoadingText={true} />}>
				<MainPageWrapper children={<Dashboard />} />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: `/pages/${MainPageNavTabs.TABLES}`,
		element: (
			<Suspense fallback={<Loading showLoadingText={true} />}>
				<MainPageWrapper children={<TablesPage />} />
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
			caption: {
				color: style.gray400,
			},
			overline: {
				color: style.gray400,
			},
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

	// Define the useEffect to preload the images when the component mounts
	useEffect(() => {
		const imagesToPreload = [
			...Object.values(LogosImage),
			...Object.values(Images),
			...Object.values(MainPageNavLogo),
		];
		const preloadAsync = async () => {
			try {
				await preloadImages(imagesToPreload, globalCache);
				// Images are preloaded, do something when all images are loaded
			} catch (error) {
				// Handle errors if any image fails to load
				console.error('Error preloading images:', error);
			}
		};

		preloadAsync();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;

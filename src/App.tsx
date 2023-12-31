//Packages
import { lazy, Suspense, useEffect, useState } from 'react';
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

//Utils
import { globalCache, preloadImages } from './constant/utils';

//Mock Data
import { Images, LogosImage, MainPageNavLogo } from './constant/mockData';

//Lazy Components
const MainPageWrapper = lazy(
	() => import('./pages/MainPageWrapper/MainPageWrapper'),
);
const TablesPage = lazy(() => import('./pages/TablesPage/TablesPage'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

const App = () => {
	const [showMainPageNav, setShowMainPageNav] = useState(false);

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
					<MainPageWrapper
						showMainPageNav={showMainPageNav}
						setShowMainPageNav={setShowMainPageNav}
						children={
							<Dashboard
								setShowMainPageNav={setShowMainPageNav}
							/>
						}
					/>
				</Suspense>
			),
			errorElement: <ErrorPage />,
		},
		{
			path: `/pages/${MainPageNavTabs.TABLES}`,
			element: (
				<Suspense fallback={<Loading showLoadingText={true} />}>
					<MainPageWrapper
						showMainPageNav={showMainPageNav}
						setShowMainPageNav={setShowMainPageNav}
						children={
							<TablesPage
								setShowMainPageNav={setShowMainPageNav}
							/>
						}
					/>
				</Suspense>
			),
			errorElement: <ErrorPage />,
		},
	]);

	let theme = createTheme({
		typography: {
			fontFamily: 'Helvetica, Sans-Serif',
			fontWeightBold: 900,
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

		document.title = Tabs.VANDELAY_INDUSTRY.replace(/_/g, ' ');
		const favicon = document.getElementById('favicon');
		const isDarkMode =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;

		const faviconPath = isDarkMode
			? LogosImage.VandaleyIndustryLogoLight
			: LogosImage.VandaleyIndustryLogoDark;

		if (favicon instanceof HTMLLinkElement) {
			favicon.href = faviconPath;
		} else {
			const newFavicon = document.createElement('link');
			newFavicon.rel = 'icon';
			newFavicon.href = faviconPath;
			document.head.appendChild(newFavicon);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;

import { lazy } from 'react';
//Assets
import VandaleyIndustryLogoLight from '../assets/vandelay_industry_logo_light.svg';
import VandaleyIndustryLogoDark from '../assets/vandelay_industry_logo_dark.svg';
import DashboardLight from '../assets/dashboard_light.svg';
import DashboardDark from '../assets/dashboard_dark.svg';
import ProfileLight from '../assets/profile_light.svg';
import ProfileDark from '../assets/profile_dark.svg';
import SignInLight from '../assets/sign_in_light.svg';
import SignInDark from '../assets/sign_in_dark.svg';
import SignUpLight from '../assets/sign_up_light.svg';
import SignUpDark from '../assets/sign_up_dark.svg';
import SignUpPageBgBanner from '../assets/sign-Up-page-top-banner.png';
import AppleLogo from '../assets/Apple.svg';
import GoogleLogo from '../assets/Google.svg';
import FacebookLogo from '../assets/Facebook.svg';
import SignInPageBgImg from '../assets/sign_in_bg.png';

import Billing from '../assets/billing.svg';
import Dashboard from '../assets/dashboard.svg';
import Help from '../assets/help.svg';
import Profile from '../assets/profile.svg';
import Rtl from '../assets/rtl.svg';
import SelectedBilling from '../assets/selected_billing.svg';
import SelectedDashboard from '../assets/selected_dashboard.svg';
import SelectedProfile from '../assets/selected_profile.svg';
import SelectedRtl from '../assets/selected_rtl.svg';
import SelectedSignIn from '../assets/selected_sign_in.svg';
import SelectedSignUp from '../assets/selected_sign_up.svg';
import SelectedTables from '../assets/selected_tables.svg';
import SignIn from '../assets/sign_in.svg';
import SignUp from '../assets/sign_up.svg';
import Tables from '../assets/tables.svg';
import HelpBg from '../assets/help_background.png';
import Wallet from '../assets/wallet.svg';
import Earth from '../assets/earth.svg';
import Documents from '../assets/documents.svg';
import Cart from '../assets/cart.svg';
import SmallRocket from '../assets/small_rocket.svg';
import SmallSettings from '../assets/small_settings.svg';
import SmallCart from '../assets/small_cart.svg';
import SmallWallet from '../assets/small_wallet.svg';

import AtlassianLogo from '../assets/Atlassian.svg';
import JiraLogo from '../assets/Jira.svg';
import SpotifyLogo from '../assets/Spotify.svg';
import StackLogo from '../assets/Stack.svg';
import AdobeXDLogo from '../assets/AdobeXD.svg';
import DesignLogo from '../assets/Design.svg';

import ChakraImage from '../assets/chakra_image.png';
import SampleBackground from '../assets/sample_image.png';

//Types
import {
	AmountUnit,
	Coordinate,
	DashBoardMainCard,
	GridItem,
	MainPageNavTabs,
	MainPageNavTabsType,
} from '../types/globalTypes';

//Components
const Card = lazy(() => import('../components/ActiveUsersCard/Card'));
const Timeline = lazy(() => import('../components/Charts/Timeline/Timeline'));
//Mock Data
import { Table1, Table2, Table3 } from './TablesMockData';

export const LogosImage = {
	VandaleyIndustryLogoLight,
	VandaleyIndustryLogoDark,
	DashboardLight,
	DashboardDark,
	ProfileLight,
	ProfileDark,
	SignInLight,
	SignInDark,
	SignUpLight,
	SignUpDark,
	AppleLogo,
	GoogleLogo,
	FacebookLogo,
	Wallet,
	Earth,
	Documents,
	Cart,
	SmallRocket,
	SmallSettings,
	SmallCart,
	SmallWallet,
	AtlassianLogo,
	JiraLogo,
	SpotifyLogo,
	StackLogo,
	AdobeXDLogo,
	DesignLogo,
};

export const Images = {
	SignUpPageBgBanner,
	SignInPageBgImg,
	HelpBg,
	ChakraImage,
	SampleBackground,
};

export const MainPageNavLogo = {
	Billing,
	Dashboard,
	Help,
	Profile,
	Rtl,
	SelectedBilling,
	SelectedDashboard,
	SelectedProfile,
	SelectedRtl,
	SelectedSignIn,
	SelectedSignUp,
	SelectedTables,
	SignIn,
	SignUp,
	Tables,
};

export const NormalPages: MainPageNavTabsType[] = [
	{
		title: MainPageNavTabs.DASHBOARD,
		defaultImage: MainPageNavLogo.Dashboard,
		selectedImage: MainPageNavLogo.SelectedDashboard,
	},
	{
		title: MainPageNavTabs.TABLES,
		defaultImage: MainPageNavLogo.Tables,
		selectedImage: MainPageNavLogo.SelectedTables,
	},
	{
		title: MainPageNavTabs.BILLING,
		defaultImage: MainPageNavLogo.Billing,
		selectedImage: MainPageNavLogo.SelectedBilling,
	},
	{
		title: MainPageNavTabs.RTL,
		defaultImage: MainPageNavLogo.Rtl,
		selectedImage: MainPageNavLogo.SelectedRtl,
	},
];

export const AccountPages: MainPageNavTabsType[] = [
	{
		title: MainPageNavTabs.PROFILE,
		defaultImage: MainPageNavLogo.Profile,
		selectedImage: MainPageNavLogo.SelectedProfile,
	},
	{
		title: MainPageNavTabs.SIGNIN,
		defaultImage: MainPageNavLogo.SignIn,
		selectedImage: MainPageNavLogo.SelectedSignIn,
	},
	{
		title: MainPageNavTabs.SIGNUP,
		defaultImage: MainPageNavLogo.SignUp,
		selectedImage: MainPageNavLogo.SelectedSignUp,
	},
];

const gridWidth = {
	xs: 6,
	sm: 3,
};

export const DashboardGridItem: GridItem[] = [
	{
		cardInformation: {
			subtitile: "Today's Money",
			amount: 53000,
			amountUnit: AmountUnit.DOLLAR,
			percentage: { number: 55, increase: true },
			imagePath: LogosImage.Wallet,
		},
		gridWidth,
	},
	{
		cardInformation: {
			subtitile: "Today's Users",
			amount: 2300,
			amountUnit: AmountUnit.USER_NUMBER,
			percentage: { number: 5, increase: true },
			imagePath: LogosImage.Earth,
		},
		gridWidth,
	},
	{
		cardInformation: {
			subtitile: 'New Clients',
			amount: 3052,
			amountUnit: AmountUnit.ClIENT_INCREASE,
			percentage: { number: 14, increase: false },
			imagePath: LogosImage.Documents,
		},
		gridWidth,
	},
	{
		cardInformation: {
			subtitile: 'Total Sales',
			amount: 17300,
			amountUnit: AmountUnit.DOLLAR,
			percentage: { number: 8, increase: true },
			imagePath: LogosImage.Cart,
		},
		gridWidth,
	},

	{
		cardInformation: {
			caption: 'Build by developers',
			title: 'Purity UI Dashboard',
			description: {
				text: `From colors, cards, typography to complex elements,
			\n you will find the full documentation.`,
			},
			readMoreOption: true,
			image: {
				path: Images.ChakraImage,
				coordinate: Coordinate.RIGHT,
			},
		},
		gridWidth: { xs: 12, sm: 7 },
	},
	{
		cardInformation: {
			title: 'Work with the Rockets',
			description: {
				text: `Wealth creation is an evolutionarily recent positive-sum game.\n
			It is all about who take the opportunity first.`,
			},
			readMoreOption: true,
			image: {
				path: Images.SampleBackground,
				coordinate: Coordinate.FULL_SCREEN,
			},
		},
		gridWidth: { xs: 12, sm: 5 },
	},
	{
		cardInformation: {
			title: 'Active Users',
			description: {
				greenText: true,
				highlightText: '(+23)',
				text: `than last week`,
			},
			readMoreOption: false,
			ChildNode: {
				bottom: Card,
			},
		},
		gridWidth: { xs: 12, sm: 5 },
	},
	{
		cardInformation: {
			title: 'Sales overview',
			description: {
				greenText: true,
				highlightText: '(+5) more',
				text: `in 2021`,
			},
			readMoreOption: false,
		},
		// children: Node,
		gridWidth: { xs: 12, sm: 7 },
	},
	{
		cardInformation: {
			title: 'Projects',
			description: {
				greenText: false,
				highlightText: '30 done',
				text: `this month`,
			},
			readMoreOption: false,
			ChildNode: {
				tableData: Table1,
			},
		},
		// children: Node,
		gridWidth: { xs: 12, sm: 8 },
	},
	{
		cardInformation: {
			title: 'Orders overview',
			description: {
				greenText: true,
				highlightText: '+30%',
				text: `this month`,
			},
			readMoreOption: false,
			ChildNode: {
				bottom: Timeline,
			},
		},
		// children: Node,
		gridWidth: { xs: 12, sm: 4 },
	},
];

export const ActiveUserCardData = [
	{
		img: LogosImage.SmallWallet,
		captionTitle: 'Users',
		value: {
			number: 32984,
		},
		linearProgress: 0.6,
	},
	{
		img: LogosImage.SmallRocket,
		captionTitle: 'Clicks',
		value: {
			number: 242000,
		},
		linearProgress: 0.8,
	},
	{
		img: LogosImage.SmallCart,
		captionTitle: 'Sales',
		value: {
			number: 2400,
			unit: '$',
		},
		linearProgress: 0.4,
	},
	{
		img: LogosImage.SmallSettings,
		captionTitle: 'Items',
		value: {
			number: 320,
			unit: '$',
		},
		linearProgress: 0.5,
	},
];

export const TablesData: DashBoardMainCard[] = [
	{
		title: 'Authors Table',
		ChildNode: { tableData: Table2 },
		readMoreOption: false,
	},
	{
		title: 'Projects',
		ChildNode: { tableData: Table3 },
		description: {
			greenText: false,
			highlightText: '30 done',
			text: `this month`,
		},
		readMoreOption: false,
	},
];

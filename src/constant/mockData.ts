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
//Types
import { MainPageNavTabs, MainPageNavTabsType } from '../types/globalTypes';

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
};

export const Images = { SignUpPageBgBanner, SignInPageBgImg, HelpBg };

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

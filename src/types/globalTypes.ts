export enum DisplayTheme {
	LIGHT,
	DARK,
}

export enum Tabs {
	VANDELAY_INDUSTRY = 'VANDELAY_INDUSTRY',
	DASHBOARD = 'DASHBOARD',
	PROFILE = 'PROFILE',
	SIGNIN = 'SIGNIN',
	SIGNUP = 'SIGNUP',
	FREE_DOWNLOAD = 'FREE_DOWNLOAD',
}

export enum MainPageNavTabs {
	DASHBOARD = 'DASHBOARD',
	TABLES = 'TABLES',
	BILLING = 'BILLING',
	RTL = 'RTL',
	PROFILE = 'PROFILE',
	SIGNIN = 'SIGN IN',
	SIGNUP = 'SIGN UP',
}

export interface MainPageNavTabsType {
	title: MainPageNavTabs;
	defaultImage: string;
	selectedImage: string;
}

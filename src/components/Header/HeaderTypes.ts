export enum TabsType {
	LOGO,
	NORMAL,
	BUTTON,
}

export interface LogosGroup {
	logoImagePath: string;
	title: string;
	tabsType: TabsType;
}

export enum Tabs {
	VANDELAY_INDUSTRY = 'Vandelay Industries',
	DASHBOARD = 'Dashboard',
	PROFILE = 'Profile',
	SIGNIN = 'Sign In',
	SIGNUP = 'Sign Up',
	FREE_DOWNLOAD = 'Free Download',
}

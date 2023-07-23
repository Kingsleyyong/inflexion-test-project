import { Tabs } from '../../types/globalTypes';

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

export const TabsTitleString = {
	[Tabs.VANDELAY_INDUSTRY]: 'Vandelay Industries',
	[Tabs.DASHBOARD]: 'Dashboard',
	[Tabs.PROFILE]: 'Profile',
	[Tabs.SIGNIN]: 'Sign In',
	[Tabs.SIGNUP]: 'Sign Up',
	[Tabs.FREE_DOWNLOAD]: 'Free Download',
};

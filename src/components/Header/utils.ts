import { LogosImage } from '../../constant/mockData';
import { DisplayTheme, Tabs } from '../../types/globalTypes';
import { LogosGroup, TabsType } from './HeaderTypes';

const getLogoImage = (theme: DisplayTheme, key: Tabs) => {
	switch (key) {
		case Tabs.VANDELAY_INDUSTRY:
			return theme === DisplayTheme.LIGHT
				? LogosImage.VandaleyIndustryLogoLight
				: LogosImage.VandaleyIndustryLogoDark;

		case Tabs.DASHBOARD:
			return theme === DisplayTheme.LIGHT
				? LogosImage.DashboardLight
				: LogosImage.DashboardDark;
		case Tabs.PROFILE:
			return theme === DisplayTheme.LIGHT
				? LogosImage.ProfileLight
				: LogosImage.ProfileDark;
		case Tabs.SIGNIN:
			return theme === DisplayTheme.LIGHT
				? LogosImage.SignInLight
				: LogosImage.SignInDark;
		case Tabs.SIGNUP:
			return theme === DisplayTheme.LIGHT
				? LogosImage.SignUpLight
				: LogosImage.SignUpDark;
		case Tabs.FREE_DOWNLOAD:
			return '';
		default:
			return '';
	}
};

const getTabsType = (key: Tabs) => {
	switch (key) {
		case Tabs.FREE_DOWNLOAD:
			return TabsType.BUTTON;
		case Tabs.VANDELAY_INDUSTRY:
			return TabsType.LOGO;
		default:
			return TabsType.NORMAL;
	}
};

export const genarateLogosGroupArray = (theme: DisplayTheme) => {
	const logosGroup: LogosGroup[] = [];

	Object.values(Tabs).map((key) => {
		const logoGroup: LogosGroup = {
			logoImagePath: getLogoImage(theme, key),
			title: key,
			tabsType: getTabsType(key),
		};
		logosGroup.push(logoGroup);
	});

	return logosGroup;
};

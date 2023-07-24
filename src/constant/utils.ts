import { MainPageNavTabs, Tabs } from '../types/globalTypes';

export const filterPath = (title: MainPageNavTabs | Tabs) => {
	switch (title) {
		case MainPageNavTabs.SIGNIN:
			return `/${Tabs.SIGNIN}`;
		case Tabs.SIGNIN:
			return `/${Tabs.SIGNIN}`;
		case MainPageNavTabs.SIGNUP:
			return `/${Tabs.SIGNUP}`;
		case Tabs.SIGNUP:
			return `/${Tabs.SIGNUP}`;
		default:
			return `/pages/${title}`;
	}
};

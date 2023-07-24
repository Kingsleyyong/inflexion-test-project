import { MainPageNavTabs, Tabs } from '../types/globalTypes';

export const filterPath = (title: MainPageNavTabs) => {
	switch (title) {
		case MainPageNavTabs.SIGNIN:
			return `/${Tabs.SIGNIN}`;
		case MainPageNavTabs.SIGNUP:
			return `/${Tabs.SIGNUP}`;
		default:
			return `/pages/${title}`;
	}
};

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

export const formatDateFromUnixTimestamp = (unixTimestamp: number) => {
	const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
	const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

	return `${day}/${month}/${year}`;
};

export const formatTimestampForTimeline = (unixTimestamp: number) => {
	const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

	const day = String(date.getDate()).padStart(2, '0');
	const monthNames = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];
	const month = monthNames[date.getMonth()];
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
	const formattedHours = date.getHours() % 12 || 12; // Convert to 12-hour format

	return `${day} ${month} ${formattedHours}:${minutes} ${amOrPm}`;
};

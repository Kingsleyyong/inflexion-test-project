import { ReactNode } from 'react';

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

export enum AmountUnit {
	DOLLAR = '$',
	USER_NUMBER = '',
	ClIENT_INCREASE = '+',
}

export interface DashboardCardElement {
	subtitile: string;
	percentage: {
		number: number;
		increase: boolean;
	};
	amount: number;
	amountUnit: AmountUnit;
	imagePath: string;
}
export enum Coordinate {
	RIGHT,
	FULL_SCREEN,
}

export interface DashBoardMainCard {
	caption?: string;
	title: string;
	description: {
		greenText?: boolean;
		highlightText?: string;
		text: string;
	};
	readMoreOption: boolean;
	image?: {
		path: string;
		coordinate: Coordinate;
	};
	ChildNode?: {
		top?: () => JSX.Element;
		bottom: () => JSX.Element;
	};
}

export interface GridItem {
	cardInformation: DashboardCardElement | DashBoardMainCard;
	gridWidth: {
		xs: number; //xtra small
		sm: number; //small
		md?: number; //medium
	};
}

export interface ActiveUserCardData {
	img: string;
	capTitle: string;
	value: {
		number: number;
		unit?: string;
	};
	linearProgress: number;
}

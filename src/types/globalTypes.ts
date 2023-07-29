import { LazyExoticComponent } from 'react';
import {
	Status,
	Table1Keys,
	Table2Keys,
	Table3Keys,
} from '../constant/TablesMockData';

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
	description?: {
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
		top?: LazyExoticComponent<() => JSX.Element>;
		bottom?: LazyExoticComponent<() => JSX.Element>;
		tableData?: Tables;
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

export interface Tables {
	editable?: boolean;
	settingButton?: boolean;
	header: string[];
	dataRow:
		| {
				[Table1Keys.Companies]: { img: string; text: string };
				[Table1Keys.Members]: string[];
				[Table1Keys.Budget]: number | null;
				[Table1Keys.Completion]: number;
		  }[]
		| {
				[Table2Keys.Author]: {
					img: string;
					text: string;
					subText: string;
				};
				[Table2Keys.Function]: { text: string; subText: string };
				[Table2Keys.Status]: Status;
				[Table2Keys.Employed]: { timestamp: number };
		  }[]
		| {
				[Table3Keys.Companies]: { img: string; text: string };
				[Table3Keys.Budget]: number | null;
				[Table3Keys.Status]: Status;
				[Table3Keys.Completion]: number;
		  }[];
}

export type TimestampData = {
	text: string;
	timestamp: number;
	img: string;
};

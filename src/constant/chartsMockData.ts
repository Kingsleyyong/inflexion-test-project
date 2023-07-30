import { SalesChartsMockDataType, TimestampData } from '../types/globalTypes';

import DropboxLogo from '../assets/Dropbox.svg';
import CreditLogo from '../assets/Credit.svg';
import CartLogo from '../assets/Cart2.svg';
import JSLogo from '../assets/JS.svg';
import RingtoneLogo from '../assets/Ringtone.svg';
import AdobeXDLogo from '../assets/AdobeXD.svg';

export const timelineData: TimestampData[] = [
	{
		text: '$2400, Design changes',
		timestamp: 1671708000,
		img: RingtoneLogo,
	},
	{
		text: 'New order #4219423',
		timestamp: 1671636060,
		img: JSLogo,
	},
	{
		text: 'Server Payments for April',
		timestamp: 1671629280,
		img: CartLogo,
	},
	{
		text: 'New card added for order #3210145',
		timestamp: 1671522720,
		img: CreditLogo,
	},
	{
		text: 'Unlock packages for Development',
		timestamp: 1671464100,
		img: DropboxLogo,
	},
	{
		text: 'New order #9851258',
		timestamp: 1671352860,
		img: AdobeXDLogo,
	},
];

export const barChartsMockData: number[] = [
	350, 250, 100, 300, 500, 450, 500, 300, 150,
];

export const salesChartsMockData: SalesChartsMockDataType[] = [
	{
		Jan: 500,
		Feb: 210,
		Mar: 190,
		Apr: 280,
		May: 220,
		Jun: 230,
		Jul: 250,
		Aug: 210,
		Sep: 120,
		Oct: 130,
		Nov: 180,
		Dec: 130,
	},
	{
		Jan: 190,
		Feb: 210,
		Mar: 208,
		Apr: 350,
		May: 370,
		Jun: 460,
		Jul: 400,
		Aug: 300,
		Sep: 350,
		Oct: 250,
		Nov: 300,
		Dec: 420,
	},
];

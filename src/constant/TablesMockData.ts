import Avatar1 from '../assets/Avatar 1.png';
import Avatar2 from '../assets/Avatar 2.png';
import Avatar3 from '../assets/Avatar 3.png';
import Avatar4 from '../assets/Avatar 4.png';
import Avatar5 from '../assets/Avatar 5.png';

import Person1 from '../assets/Person1.png';
import Person2 from '../assets/Person2.png';
import Person3 from '../assets/Person3.png';
import Person4 from '../assets/Person4.png';
import Person5 from '../assets/Person5.png';
import Person6 from '../assets/Person6.png';

import AtlassianLogo from '../assets/Atlassian.svg';
import JiraLogo from '../assets/Jira.svg';
import SpotifyLogo from '../assets/Spotify.svg';
import StackLogo from '../assets/Stack.svg';
import AdobeXDLogo from '../assets/AdobeXD.svg';
import DesignLogo from '../assets/Design.svg';

import { Tables } from '../types/globalTypes';

const Avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

export enum Status {
	Cancelled = 'Cancelled',
	Working = 'Working',
	Done = 'Done',
	Online = 'Online',
	Offline = 'Offline',
}

export enum Table1Keys {
	Companies = 'Companies',
	Members = 'Members',
	Budget = 'Budget',
	Completion = 'Completion',
}

export enum Table2Keys {
	Author = 'Author',
	Function = 'Function',
	Status = 'Status',
	Employed = 'Employed',
}

export enum Table3Keys {
	Companies = 'Companies',
	Budget = 'Budget',
	Status = 'Status',
	Completion = 'Completion',
}
export const Table1: Tables = {
	header: Object.keys(Table1Keys),
	dataRow: [
		{
			[Table1Keys.Companies]: {
				img: AdobeXDLogo,
				text: 'Chakra Soft UI Version',
			},
			[Table1Keys.Members]: structuredClone(Avatars),
			[Table1Keys.Budget]: 14000,
			[Table1Keys.Completion]: 60,
		},
		{
			[Table1Keys.Companies]: {
				img: AtlassianLogo,
				text: 'Add Progress Track',
			},
			[Table1Keys.Members]: structuredClone(Avatars).splice(0, 2),
			[Table1Keys.Budget]: 3000,
			[Table1Keys.Completion]: 10,
		},
		{
			[Table1Keys.Companies]: {
				img: StackLogo,
				text: 'Fix Platform Errors',
			},
			[Table1Keys.Members]: structuredClone(Avatars).splice(0, 2),
			[Table1Keys.Budget]: null,
			[Table1Keys.Completion]: 100,
		},
		{
			[Table1Keys.Companies]: {
				img: SpotifyLogo,
				text: 'Launch Our Mobile App',
			},
			[Table1Keys.Members]: structuredClone(Avatars).splice(0, 4),
			[Table1Keys.Budget]: 32000,
			[Table1Keys.Completion]: 100,
		},
		{
			[Table1Keys.Companies]: {
				img: JiraLogo,
				text: 'Add the New Pricing Page',
			},
			[Table1Keys.Members]: structuredClone(Avatars),
			[Table1Keys.Budget]: 400,
			[Table1Keys.Completion]: 25,
		},
		{
			[Table1Keys.Companies]: {
				img: DesignLogo,
				text: 'Redesign New Online Shop',
			},
			[Table1Keys.Members]: structuredClone(Avatars).splice(2),
			[Table1Keys.Budget]: 7600,
			[Table1Keys.Completion]: 40,
		},
	],
};

export const Table2: Tables = {
	editable: true,
	header: Object.keys(Table2Keys),
	dataRow: [
		{
			[Table2Keys.Author]: {
				img: Person1,
				text: 'Elaine Benes',
				subText: 'elaine@vandelay.com',
			},
			[Table2Keys.Function]: { text: 'Manager', subText: 'Organization' },
			[Table2Keys.Status]: Status.Online,
			[Table2Keys.Employed]: { text: '14/06/21' },
		},
		{
			[Table2Keys.Author]: {
				img: Person2,
				text: 'Sidra Holland',
				subText: 'sidra@vandelay.com',
			},
			[Table2Keys.Function]: {
				text: 'Programmer',
				subText: 'Developer',
			},
			[Table2Keys.Status]: Status.Offline,
			[Table2Keys.Employed]: { text: '14/06/21' },
		},
		{
			[Table2Keys.Author]: {
				img: Person3,
				text: 'Cosmo Kramer',
				subText: 'kramer@vandelay.com',
			},
			[Table2Keys.Function]: {
				text: 'Executive',
				subText: 'Projects',
			},
			[Table2Keys.Status]: Status.Online,
			[Table2Keys.Employed]: { text: '14/06/21' },
		},
		{
			[Table2Keys.Author]: {
				img: Person4,
				text: 'Newman',
				subText: 'newman@usps.com',
			},
			[Table2Keys.Function]: { text: 'Manager', subText: 'Organization' },
			[Table2Keys.Status]: Status.Online,
			[Table2Keys.Employed]: { text: '14/06/21' },
		},
		{
			[Table2Keys.Author]: {
				img: Person5,
				text: 'Frank Costanza',
				subText: 'frank@vandelay.com',
			},
			[Table2Keys.Function]: {
				text: 'Programmer',
				subText: 'Developer',
			},
			[Table2Keys.Status]: Status.Offline,
			[Table2Keys.Employed]: { text: '14/06/21' },
		},
		{
			[Table2Keys.Author]: {
				img: Person6,
				text: 'Art VanDelay',
				subText: 'art.ie@vandelay.com',
			},
			[Table2Keys.Function]: {
				text: 'Designer',
				subText: 'UI/UX Design',
			},
			[Table2Keys.Status]: Status.Offline,
			[Table2Keys.Employed]: { text: '14/06/21' },
		},
	],
};
export const Table3: Tables = {
	settingButton: true,
	header: Object.keys(Table3Keys),
	dataRow: [
		{
			[Table3Keys.Companies]: {
				img: AdobeXDLogo,
				text: 'Chakra Soft UI Version',
			},
			[Table3Keys.Budget]: 14000,
			[Table3Keys.Status]: Status.Working,
			[Table3Keys.Completion]: 60,
		},
		{
			[Table3Keys.Companies]: {
				img: AtlassianLogo,
				text: 'Add Progress Track',
			},
			[Table3Keys.Budget]: 3000,
			[Table3Keys.Status]: Status.Cancelled,
			[Table3Keys.Completion]: 10,
		},
		{
			[Table3Keys.Companies]: {
				img: StackLogo,
				text: 'Fix Platform Errors',
			},
			[Table3Keys.Budget]: null,
			[Table3Keys.Status]: Status.Done,
			[Table3Keys.Completion]: 100,
		},
		{
			[Table3Keys.Companies]: {
				img: SpotifyLogo,
				text: 'Launch Our Mobile App',
			},
			[Table3Keys.Budget]: 32000,
			[Table3Keys.Status]: Status.Done,
			[Table3Keys.Completion]: 100,
		},
		{
			[Table3Keys.Companies]: {
				img: JiraLogo,
				text: 'Add the New Pricing Page',
			},
			[Table3Keys.Budget]: 400,
			[Table3Keys.Status]: Status.Working,
			[Table3Keys.Completion]: 25,
		},
	],
};

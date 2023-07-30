import { Option } from 'highcharts';

declare module '*.module.sass' {
	const content: { [className: string]: string };
	export default content;
}

declare module '*.module.sass';

declare module 'highcharts' {
	interface Options {
		[key: string]: Record<Option>;
	}
}

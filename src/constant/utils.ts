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

// Image Cache
export const globalCache: { [key: string]: HTMLImageElement } = {};
export const preloadImages = async (
	images: string[],
	cache?: Record<string, HTMLImageElement>,
	updateFunction?: (percentComplete: number) => void,
): Promise<void> => {
	const localCache = cache || globalCache;
	let resolvedOrRejected = 0;
	const promises = [
		...images.map(
			(src) =>
				new Promise((resolve, reject) => {
					if (localCache[src]) resolve(localCache[src]);
					const img = new Image();
					img.src = src;
					img.onload = () => {
						localCache[src] = img;
						resolvedOrRejected += 1;
						if (updateFunction) {
							updateFunction(
								Math.floor(
									(resolvedOrRejected / images.length) * 100,
								),
							);
						}
						resolve(img);
					};
					img.onerror = () => {
						resolvedOrRejected += 1;
						if (updateFunction) {
							updateFunction(
								Math.floor(
									(resolvedOrRejected / images.length) * 100,
								),
							);
						}
						reject();
					};
				}),
		),
		new Promise((resolve) => setTimeout(resolve, 500)),
	];
	await Promise.allSettled(promises);
};

export const linearPreload = (imagesToLoad: Array<string>) => {
	if (!imagesToLoad || imagesToLoad.length === 0) return;
	const [currentImage, ...restOfImages] = imagesToLoad;
	if (!currentImage) {
		linearPreload(restOfImages);
		return;
	}
	const img = new Image();
	img.src = currentImage;
	img.onload = () => {
		linearPreload(restOfImages);
	};
	img.onerror = () => {
		linearPreload(restOfImages);
	};
};

import { useEffect, useMemo, useState } from 'react';

const useMediaQuery = (query: string) => {
	const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
	const [match, setMatch] = useState(mediaQuery.matches);

	useEffect(() => {
		const onChange = () => setMatch(mediaQuery.matches);
		mediaQuery.addEventListener('change', onChange);

		return () => mediaQuery.removeEventListener('change', onChange);
	}, [mediaQuery]);

	return match;
};

export const useMediaQueries = () => {
	const md = useMediaQuery('(min-width: 1035px)'); //Tablet
	const lg = useMediaQuery('(min-width: 1200px)'); //Desktop

	return { medium: md, large: lg };
};

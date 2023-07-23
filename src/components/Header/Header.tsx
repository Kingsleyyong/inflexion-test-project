// Packages
import { useEffect, useState } from 'react';

// SASS
import style from './Header.module.sass';

// Types
import { LogosGroup } from './HeaderTypes.ts';
import { DisplayTheme } from '../../types/globalTypes.ts';
import LogoGroup from '../HeaderLogoGroup/LogoGroup.tsx';
import { genarateLogosGroupArray } from './utils.ts';

interface HeaderProps {
	theme: DisplayTheme;
	className: string;
}

const Header = ({ theme, className }: HeaderProps) => {
	const [logosGroup, setLogosGroup] = useState<LogosGroup[]>([]);

	useEffect(() => {
		setLogosGroup(genarateLogosGroupArray(theme));
	}, [theme]);

	return (
		<div data-theme={theme} className={`${className} ${style.headerBox}`}>
			{logosGroup.map((logoObj) => (
				<LogoGroup
					key={logoObj.title}
					displayTheme={theme}
					logoImagePath={logoObj.logoImagePath}
					title={logoObj.title}
					tabsType={logoObj.tabsType}
				/>
			))}
		</div>
	);
};

export default Header;

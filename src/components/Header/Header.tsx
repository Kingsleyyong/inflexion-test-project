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
}

const Header = ({ theme }: HeaderProps) => {
	const [logosGroup, setLogosGroup] = useState<LogosGroup[]>([]);

	useEffect(() => {
		setLogosGroup(genarateLogosGroupArray(theme));
	}, [theme]);

	return (
		<div className={style.headerBox}>
			{logosGroup.map((logoObj) => (
				<LogoGroup
					key={logoObj.title}
					logoImagePath={logoObj.logoImagePath}
					title={logoObj.title}
					tabsType={logoObj.tabsType}
				/>
			))}
		</div>
	);
};

export default Header;

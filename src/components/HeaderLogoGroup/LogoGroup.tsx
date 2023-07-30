//Packages
import { Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

// SASS
import style from './LogoGroup.module.sass';

//Types
import { DisplayTheme, Tabs } from '../../types/globalTypes';
import { LogosGroup, TabsType } from '../Header/HeaderTypes';

//Utils
import { filterPath } from '../../constant/utils';

//Hooks
import { useMediaQueries } from '../../hooks/mediaQuery';

interface LogoGroupProp extends LogosGroup {
	displayTheme: DisplayTheme;
	tabPath: string;
}

const LogoGroup = ({
	displayTheme,
	logoImagePath,
	tabPath,
	title,
	tabsType,
}: LogoGroupProp) => {
	const { medium, large } = useMediaQueries();

	const NavTypography = styled(Typography)(({}) => ({
		color:
			(!medium && !large) || displayTheme === DisplayTheme.DARK
				? style.gray700
				: style.white,
		textAlign: 'center',
		fontWeight:
			tabsType === TabsType.LOGO ? 'fontWeightBold' : 'fontWeightRegular',
		lineHeight: '1rem',
		letterSpacing: '0',
		textTransform: 'uppercase',
	}));

	const ButtonTypography = styled(Typography)(({ theme }) => ({
		...theme.typography,
		textAlign: 'center',
		fontWeight: 'fontWeightLight',
		lineHeight: '1rem',
		letterSpacing: '0',
		color:
			(!medium && !large) || displayTheme === DisplayTheme.DARK
				? style.white
				: style.gray700,
		textTransform: 'capitalize',
	}));

	if (tabsType === TabsType.BUTTON)
		return (
			<div
				data-theme={medium || large ? displayTheme : DisplayTheme.DARK}
				role="button"
				key={title}
				className={style.button}
			>
				<ButtonTypography variant={'body2'}>{title}</ButtonTypography>
			</div>
		);
	else
		return (
			<NavLink
				to={filterPath(tabPath as Tabs)}
				key={title}
				className={`${tabsType === TabsType.LOGO && style.mainLogo}  ${
					style.logoGroup
				}`}
			>
				{logoImagePath.length !== 0 && (
					<img src={logoImagePath} alt={title} loading="lazy" />
				)}
				<NavTypography
					variant={
						tabsType === TabsType.LOGO ? 'subtitle1' : 'caption'
					}
				>
					{title}
				</NavTypography>
			</NavLink>
		);
};

export default LogoGroup;

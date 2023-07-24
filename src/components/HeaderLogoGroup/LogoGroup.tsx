// SASS
import { Typography, styled } from '@mui/material';
import { DisplayTheme, MainPageNavTabs } from '../../types/globalTypes';
import { LogosGroup, TabsType } from '../Header/HeaderTypes';
import style from './LogoGroup.module.sass';
import { NavLink } from 'react-router-dom';
import { filterPath } from '../../constant/utils';

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
	const NavTypography = styled(Typography)(({ theme }) => ({
		// ...theme.typography,
		color: displayTheme === DisplayTheme.DARK ? style.gray700 : style.white,
		textAlign: 'center',
		fontWeight: tabsType === TabsType.LOGO ? 900 : 600,
		lineHeight: '15px',
		letterSpacing: '0',
		textTransform: 'uppercase',
	}));

	const ButtonTypography = styled(Typography)(({ theme }) => ({
		...theme.typography,
		textAlign: 'center',
		fontWeight: 400,
		lineHeight: '15px',
		letterSpacing: '0',
		color: displayTheme === DisplayTheme.DARK ? style.white : style.gray700,
		textTransform: 'capitalize',
	}));

	if (tabsType === TabsType.BUTTON)
		return (
			<div
				data-theme={displayTheme}
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
				to={filterPath(tabPath as MainPageNavTabs)}
				key={title}
				className={`${tabsType === TabsType.LOGO && style.mainLogo}  ${
					style.logoGroup
				}`}
			>
				{logoImagePath.length !== 0 && (
					<img src={logoImagePath} alt={title} loading="lazy" />
				)}
				<NavTypography
					variant={tabsType === TabsType.LOGO ? 'h6' : 'caption'}
				>
					{title}
				</NavTypography>
			</NavLink>
		);
};

export default LogoGroup;

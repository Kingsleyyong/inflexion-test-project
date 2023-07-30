// Packages
import { Suspense, lazy, useEffect, useState } from 'react';

// SASS
import style from './Header.module.sass';

// Types
import { LogosGroup, TabsTitleString } from './HeaderTypes.ts';
import { DisplayTheme } from '../../types/globalTypes.ts';
import { genarateLogosGroupArray } from './utils.ts';
import Loading from '../Loading/Loading.tsx';
import { useMediaQueries } from '../../hooks/mediaQuery.ts';

//Icon
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu } from '@mui/material';

// Lazy Component
const LogoGroup = lazy(() => import('../HeaderLogoGroup/LogoGroup.tsx'));

interface HeaderProps {
	theme: DisplayTheme;
	className: string;
}

const Header = ({ theme, className }: HeaderProps) => {
	const [logosGroup, setLogosGroup] = useState<LogosGroup[]>([]);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const { medium, large } = useMediaQueries();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		setLogosGroup(
			genarateLogosGroupArray(
				medium || large ? theme : DisplayTheme.DARK,
			),
		);
	}, [theme, medium, large]);

	return (
		<div
			data-theme={medium || large ? theme : DisplayTheme.DARK}
			className={`${style.headerBox} ${(medium || large) && className}`}
		>
			{(medium || large) &&
				logosGroup.map((logoObj) => (
					<Suspense
						fallback={
							<Loading
								showLoadingText={false}
								key={logoObj.title}
							/>
						}
					>
						<LogoGroup
							displayTheme={theme}
							logoImagePath={logoObj.logoImagePath}
							tabPath={logoObj.title}
							title={
								TabsTitleString[
									logoObj.title as unknown as keyof typeof TabsTitleString
								]
							}
							tabsType={logoObj.tabsType}
						/>
					</Suspense>
				))}

			{!medium && !large && (
				<>
					<Button
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<MenuIcon color={'primary'} />
					</Button>

					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
					>
						{logosGroup.map((logoObj) => (
							<Suspense
								fallback={
									<Loading
										showLoadingText={false}
										key={logoObj.title}
									/>
								}
							>
								<LogoGroup
									displayTheme={theme}
									logoImagePath={logoObj.logoImagePath}
									tabPath={logoObj.title}
									title={
										TabsTitleString[
											logoObj.title as unknown as keyof typeof TabsTitleString
										]
									}
									tabsType={logoObj.tabsType}
								/>
							</Suspense>
						))}
					</Menu>
				</>
			)}
		</div>
	);
};

export default Header;

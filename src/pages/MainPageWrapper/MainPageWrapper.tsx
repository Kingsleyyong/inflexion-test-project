import { Button, Typography } from '@mui/material';
import {
	AccountPages,
	LogosImage,
	MainPageNavLogo,
	NormalPages,
} from '../../constant/mockData';
import style from './MainPageWrapper.module.sass';
import { MainPageNavTabs, Tabs } from '../../types/globalTypes';
import { TabsTitleString } from '../../components/Header/HeaderTypes';
import { useEffect, useState } from 'react';
import ChildBoxNavLink from './ChildBoxNavLink';
import { useLocation } from 'react-router';
import { useMediaQueries } from '../../hooks/mediaQuery';

interface MainPageWrapperProps {
	children: React.ReactNode;
	showMainPageNav: boolean;
	setShowMainPageNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainPageWrapper = ({
	children,
	showMainPageNav,
	setShowMainPageNav,
}: MainPageWrapperProps) => {
	const [selectedPage, setSelectedPage] = useState<MainPageNavTabs>(
		MainPageNavTabs.DASHBOARD,
	);

	const location = useLocation();
	const { large } = useMediaQueries();

	useEffect(() => {
		const locationArrPath = location.pathname.split('/');
		setSelectedPage(
			(locationArrPath.at(-1) as MainPageNavTabs) ??
				MainPageNavTabs.DASHBOARD,
		);
	}, []);

	useEffect(() => {
		setShowMainPageNav(false);
	}, [location.pathname]);

	return (
		<div className={style.parentBox}>
			{(large || showMainPageNav) && (
				<div className={style.leftNavBar}>
					<div className={style.navBarChildBox}>
						<img
							loading="lazy"
							src={LogosImage.VandaleyIndustryLogoDark}
							alt="Vandaley Industry"
						/>

						<Typography
							variant={'subtitle1'}
							color={style.gray700}
							fontWeight={700}
							textTransform={'uppercase'}
							ml={2}
						>
							{TabsTitleString[Tabs.VANDELAY_INDUSTRY]}
						</Typography>
					</div>

					<hr className={style.hrLine} />

					{NormalPages.map((nav) => (
						<ChildBoxNavLink
							key={nav.title}
							nav={nav}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					))}

					<Typography
						variant={'body1'}
						textTransform={'capitalize'}
						fontWeight={700}
						m={'3% 10%'}
					>
						Account Pages
					</Typography>

					{AccountPages.map((nav) => (
						<ChildBoxNavLink
							key={nav.title}
							nav={nav}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					))}

					<div className={style.helpDiv}>
						<img
							loading="lazy"
							src={MainPageNavLogo.Help}
							alt="Help Logo"
						/>
						<Typography
							color={style.white}
							mt={3}
							variant={'body1'}
							fontWeight={700}
						>
							Need help?
						</Typography>
						<Typography
							color={style.white}
							variant={'caption'}
							fontWeight={400}
						>
							Please check our docs
						</Typography>

						<Button
							variant={'contained'}
							color="secondary"
							sx={{
								width: '100%',
								mt: '5%',
								borderRadius: '11px',
							}}
						>
							<Typography
								color={style.gray700}
								variant={'caption'}
								fontWeight={700}
							>
								DOCUMENTATION
							</Typography>
						</Button>
					</div>
				</div>
			)}

			<div className={style.fixedPosition}>{children}</div>
		</div>
	);
};

export default MainPageWrapper;

import { NavLink } from 'react-router-dom';
import style from './MainPageWrapper.module.sass';
import { MainPageNavTabs, MainPageNavTabsType } from '../../types/globalTypes';
import { Typography } from '@mui/material';
import { filterPath } from '../../constant/utils';

interface ChildBoxNavLinkProps {
	nav: MainPageNavTabsType;
	selectedPage: MainPageNavTabs;
	setSelectedPage: React.Dispatch<React.SetStateAction<MainPageNavTabs>>;
}

const ChildBoxNavLink = ({
	nav,
	selectedPage,
	setSelectedPage,
}: ChildBoxNavLinkProps) => {
	return (
		<NavLink
			to={filterPath(nav.title)}
			className={`${style.clickableNavChildBox} ${
				selectedPage === nav.title && style.selectedNavChildBox
			}`}
			key={nav.title}
			onClick={() => setSelectedPage(nav.title)}
		>
			<div className={style.logoBox}>
				<img
					loading="lazy"
					src={
						selectedPage === nav.title
							? nav.selectedImage
							: nav.defaultImage
					}
					alt={nav.title}
				/>
			</div>

			<Typography
				fontWeight={700}
				color={
					selectedPage === nav.title ? style.gray700 : style.gray400
				}
				ml={2}
				variant={'subtitle1'}
				textTransform={'capitalize'}
			>
				{nav.title === MainPageNavTabs.RTL
					? nav.title
					: nav.title.toLowerCase()}
			</Typography>
		</NavLink>
	);
};

export default ChildBoxNavLink;

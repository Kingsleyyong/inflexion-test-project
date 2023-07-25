import { Grid } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import PageWrapperHeader from '../../components/PageWrapperHeader/PageWrapperHeader';
import { MainPageNavTabs } from '../../types/globalTypes';
import style from './Dashboard.module.sass';
import AnalyticCard from '../../components/AnalyticsCard/AnalyticCard';
import { DashboardGridItem } from '../../constant/mockData';
import MainCardboard from '../../components/MainCardboard/MainCardboard';

const Dashboard = () => {
	return (
		<div className={style.dashboardParent}>
			<PageWrapperHeader pageTitle={MainPageNavTabs.DASHBOARD} />

			<Grid container spacing={2} alignItems="stretch">
				{DashboardGridItem.map((gridItem) => {
					const { gridWidth, cardInformation } = gridItem;
					if (!Object.keys(cardInformation).includes('title'))
						return (
							<Grid item sm={gridWidth.sm} xs={gridWidth.xs}>
								<AnalyticCard cardDetails={cardInformation} />
							</Grid>
						);
					else
						return (
							<Grid item sm={gridWidth.sm} xs={gridWidth.xs}>
								<MainCardboard
									cardInformation={cardInformation}
								/>
							</Grid>
						);
				})}
			</Grid>

			<Footer classname={''} />
		</div>
	);
};

export default Dashboard;

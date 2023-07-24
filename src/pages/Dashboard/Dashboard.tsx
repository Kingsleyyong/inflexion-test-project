import Footer from '../../components/Footer/Footer';
import PageWrapperHeader from '../../components/PageWrapperHeader/PageWrapperHeader';
import { MainPageNavTabs } from '../../types/globalTypes';
import style from './Dashboard.module.sass';

const Dashboard = () => {
	return (
		<div className={style.dashboardParent}>
			<PageWrapperHeader pageTitle={MainPageNavTabs.DASHBOARD} />
			<Footer classname={''} />
		</div>
	);
};

export default Dashboard;

import Footer from '../../components/Footer/Footer';
import MainCardboard from '../../components/MainCardboard/MainCardboard';
import PageWrapperHeader from '../../components/PageWrapperHeader/PageWrapperHeader';
import { TablesData } from '../../constant/mockData';
import { MainPageNavTabs } from '../../types/globalTypes';
import style from './TablesPage.module.sass';

const TablesPage = () => {
	return (
		<div>
			<PageWrapperHeader pageTitle={MainPageNavTabs.TABLES} />

			{TablesData.map((data) => (
				<MainCardboard
					cardInformation={data}
					className={style.tableBox}
					key={data.title}
				/>
			))}

			<Footer classname={style.footerClass} />
		</div>
	);
};

export default TablesPage;

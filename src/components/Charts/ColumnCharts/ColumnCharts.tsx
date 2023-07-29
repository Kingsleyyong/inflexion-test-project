// import { barChartsMockData } from '../../../constant/chartsMockData';
import style from './ColumnCharts.module.sass';
// import * as Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

const ColumnCharts = () => {
	const options = {
		chart: {
			type: 'column',
		},
		xAxis: {
			categories: Array.from(Array(9).keys()),
		},
	};
	return (
		<div className={style.barChartStyle}>
			{/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
		</div>
	);
};

export default ColumnCharts;

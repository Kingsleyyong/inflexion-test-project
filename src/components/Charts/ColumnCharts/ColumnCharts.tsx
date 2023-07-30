import { barChartsMockData } from '../../../constant/chartsMockData';
import { useEffect, useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import style from './ColumnCharts.module.sass';

const options: Highcharts.Options = {
	title: {
		text: null,
	},
	series: [
		{
			type: 'column',
			data: barChartsMockData,
		},
	],
	credits: {
		enabled: false,
	},
	legend: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xAxis: {
		visible: false,
	},
	yAxis: {
		tickInterval: 100,
		max: Math.max(...barChartsMockData),
		title: null,
		gridLineWidth: 0,
		labels: {
			align: 'left',
			x: -10,
			y: 0,
			style: {
				color: style.white,
			},
		},
	},
	plotOptions: {
		column: {
			borderRadius: 15,
		},
		series: { pointWidth: 8, borderWidth: 0, color: style.white },
	},
	chart: {
		backgroundColor: 'rgba(0,0,0,0)',
	},
};

const ColumnCharts = () => {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	useEffect(() => {
		const chartContainer = chartComponentRef.current?.container.current;
		if (!chartContainer) return;

		chartContainer.style.width = '100%';
		chartContainer.style.height = '100%';
		chartComponentRef.current.chart.reflow();
	}, []);

	return (
		<div className={style.barChartStyle}>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				ref={chartComponentRef}
			/>
		</div>
	);
};

export default ColumnCharts;

import { barChartsMockData } from '../../../constant/chartsMockData';
import { useEffect, useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import style from './Column.module.sass';

const options: Highcharts.Options = {
	title: {
		text: undefined,
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
		left: 40,
		visible: false,
	},
	yAxis: {
		tickInterval: 100,
		max: Math.max(...barChartsMockData),
		title: undefined,
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
			color: style.white,
			borderWidth: 0,
			pointWidth: 8,
			borderRadius: 15,
		},
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

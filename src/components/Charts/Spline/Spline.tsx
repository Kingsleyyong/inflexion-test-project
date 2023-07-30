import { salesChartsMockData } from '../../../constant/chartsMockData';
import { useEffect, useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import style from './Spline.module.sass';

const options: Highcharts.Options = {
	title: {
		text: undefined,
	},
	series: salesChartsMockData.map((object, index) => ({
		color: index === 0 ? 'rgba(45, 55, 72, 1)' : 'rgba(79, 209, 197, 1)',
		type: 'areaspline',
		data: Object.values(object),
		fillColor:
			index === 0
				? {
						linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
						stops: [
							[0, 'rgba(45, 55, 72, 0.36)'],
							[1, 'rgba(45, 55, 72, 0)'],
						],
				  }
				: {
						linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
						stops: [
							[0, 'rgba(79, 209, 197, 0.54)'],
							[1, 'rgba(79, 209, 197, 0)'],
						],
				  },
	})),
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
		startOnTick: true,
		endOnTick: true,
		left: 33,
		width: '108%',
		categories: Object.keys(salesChartsMockData[0]),
		accessibility: {
			description: 'Months of the year',
		},
		labels: {
			style: {
				color: style.gray300,
			},
		},
	},
	yAxis: {
		min: 0,
		max: salesChartsMockData.reduce((accumulator: number, object) => {
			const maxNumber = Math.max(...Object.values(object));
			return maxNumber > accumulator
				? (accumulator = maxNumber)
				: accumulator;
		}, 0),
		tickInterval: 100,
		title: undefined,
		gridLineDashStyle: 'Dash',
		labels: {
			align: 'center',
			x: -30,
			y: 5,
			style: {
				color: style.gray300,
			},
		},
	},
	plotOptions: {
		areaspline: {
			marker: {
				enabled: false,
				states: {
					hover: {
						enabled: false,
					},
				},
			},
			lineWidth: 2,
		},
	},
};

const SplineCharts = () => {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	useEffect(() => {
		const chartContainer = chartComponentRef.current?.container.current;
		if (!chartContainer) return;

		chartContainer.style.width = '100%';
		chartContainer.style.height = '100%';
		chartComponentRef.current.chart.reflow();
	}, []);

	return (
		<div className={style.splineChartStyle}>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				ref={chartComponentRef}
			/>
		</div>
	);
};

export default SplineCharts;

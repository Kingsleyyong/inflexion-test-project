import {
	Timeline as MUITimeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
	timelineItemClasses,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { timelineData } from '../../../constant/timeline';
import { formatTimestampForTimeline } from '../../../constant/utils';
import style from './Timeline.module.sass';

const Timeline = () => {
	return (
		<MUITimeline
			sx={{
				margin: 0,
				[`& .${timelineItemClasses.root}:before`]: {
					flex: 0,
					padding: 0,
				},
			}}
		>
			{timelineData.map((data, dataIndex) => (
				<TimelineItem key={`Item ${dataIndex}`}>
					<TimelineSeparator>
						<TimelineConnector
							className={`${
								dataIndex === 0 && style.transparent
							}`}
						/>
						<TimelineDot className={style.timelineDot}>
							<img src={data.img} alt={data.text} />
						</TimelineDot>
						<TimelineConnector
							className={`${
								dataIndex === timelineData.length - 1 &&
								style.transparent
							}`}
						/>
					</TimelineSeparator>

					<TimelineContent className={style.content}>
						<Typography variant={'body2'} component="span">
							{data.text}
						</Typography>
						<Typography variant={'caption'}>
							{formatTimestampForTimeline(data.timestamp)}
						</Typography>
					</TimelineContent>
				</TimelineItem>
			))}
		</MUITimeline>
	);
};

export default Timeline;

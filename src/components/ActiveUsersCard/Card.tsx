import {
	LinearProgress,
	Typography,
	linearProgressClasses,
	styled,
} from '@mui/material';
import style from './Card.module.sass';
import { ActiveUserCardData } from '../../constant/mockData';

const Card = () => {
	const BorderLinearProgress = styled(LinearProgress)(({}) => ({
		height: '0.15rem',
		borderRadius: 20,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: style.gray200,
		},
	}));

	return (
		<div className={style.parentBox}>
			{ActiveUserCardData.map((data) => (
				<div className={style.card}>
					<div className={style.flexTopBox}>
						<img src={data.img} alt={data.captionTitle} />
						<Typography
							variant={'caption'}
							color={style.gray400}
							ml={'0.1rem'}
							fontWeight={'fontWeightMedium'}
						>
							{data.captionTitle}
						</Typography>
					</div>
					<Typography variant={'body1'}>
						{data.value.number.toLocaleString()} {data.value.unit}
					</Typography>
					<BorderLinearProgress
						variant="determinate"
						value={data.linearProgress * 100}
					/>
				</div>
			))}
		</div>
	);
};

export default Card;

import { Typography } from '@mui/material';
import style from './AnalyticCard.module.sass';
import {
	DashBoardMainCard,
	DashboardCardElement,
} from '../../types/globalTypes';

interface AnalyticCardProp {
	cardDetails: DashboardCardElement | DashBoardMainCard;
}

const AnalyticCard = ({ cardDetails }: AnalyticCardProp) => {
	const { subtitile, amount, amountUnit, percentage, imagePath } =
		cardDetails as DashboardCardElement;

	return (
		<div className={style.card}>
			<div className={style.leftDiv}>
				<Typography variant={'caption'} color={style.gray400}>
					{subtitile}
				</Typography>

				<div className={style.detailsDiv}>
					<Typography variant={'body1'} mr={1}>
						{amountUnit}
						{amount}
					</Typography>
					<Typography
						variant={'caption'}
						color={
							percentage.increase ? style.green400 : style.red500
						}
					>
						{percentage.increase ? '+' : '-'}
						{percentage.number}%
					</Typography>
				</div>
			</div>

			<img src={imagePath} alt="Cart" loading="lazy" />
		</div>
	);
};

export default AnalyticCard;

import { Typography } from '@mui/material';
import {
	Coordinate,
	DashBoardMainCard,
	DashboardCardElement,
} from '../../types/globalTypes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import style from './MainCardboard.module.sass';
import { Fragment } from 'react';

interface MainCardboardProp {
	cardInformation: DashBoardMainCard | DashboardCardElement;
}
const MainCardboard = ({ cardInformation }: MainCardboardProp) => {
	const { caption, title, description, readMoreOption, image, children } =
		cardInformation as DashBoardMainCard;

	return (
		<div className={style.cardBox}>
			<div className={style.mockInfoDiv}>
				{caption && (
					<Typography variant={'caption'} color={style.gray400}>
						{caption}
					</Typography>
				)}
				<Typography
					variant={'body1'}
					mr={1}
					mt={1}
					mb={1}
					color={`${
						image &&
						image.coordinate === Coordinate.FULL_SCREEN &&
						style.white
					}`}
				>
					{title}
				</Typography>
				<div className={style.descriptionBox}>
					{description.greenText !== undefined &&
						description.greenText === false && (
							<Fragment>
								<CheckCircleIcon
									sx={{
										color: style.green400,
										fontSize: '1rem',
										mr: '0.5%',
									}}
								/>{' '}
							</Fragment>
						)}

					{description.highlightText && (
						<Typography
							variant={'caption'}
							color={description.greenText ? style.green400 : ''}
							mr={'0.5%'}
						>
							{description.highlightText}{' '}
						</Typography>
					)}

					<Typography
						variant={'caption'}
						fontWeight={'fontWeightLight'}
						color={
							image?.coordinate === Coordinate.FULL_SCREEN
								? style.white
								: style.gray400
						}
					>
						{description.text.split('\n').map((line) => (
							<div key={`${line}`}>{line}</div>
						))}
					</Typography>
				</div>
			</div>

			{image && (
				<Fragment>
					<img
						draggable={false}
						src={image.path}
						alt={image.path}
						className={`${
							image.coordinate === Coordinate.RIGHT &&
							style.rightImage
						} ${
							image.coordinate === Coordinate.FULL_SCREEN &&
							style.fullImage
						}`}
					/>
					{image.coordinate === Coordinate.FULL_SCREEN && (
						<div
							className={`${style.gradientOverlay} ${style.fullImage}`}
						/>
					)}
				</Fragment>
			)}
		</div>
	);
};

export default MainCardboard;

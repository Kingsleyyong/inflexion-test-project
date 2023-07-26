import { Link, Typography } from '@mui/material';
import {
	Coordinate,
	DashBoardMainCard,
	DashboardCardElement,
} from '../../types/globalTypes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';
import style from './MainCardboard.module.sass';
import { Fragment } from 'react';
import Card from '../ActiveUsersCard/Card';

interface MainCardboardProp {
	cardInformation: DashBoardMainCard | DashboardCardElement;
}
const MainCardboard = ({ cardInformation }: MainCardboardProp) => {
	const { caption, title, description, readMoreOption, image, ChildNode } =
		cardInformation as DashBoardMainCard;

	return (
		<div className={style.cardBox}>
			{ChildNode && ChildNode.top && <ChildNode.top />}

			<div className={style.horizontalFlex}>
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
								color={
									description.greenText ? style.green400 : ''
								}
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

					<Link underline={'none'} href={''}>
						{readMoreOption && (
							<Typography
								variant={'caption'}
								fontWeight={'fontWeightLight'}
								color={
									image &&
									image.coordinate === Coordinate.FULL_SCREEN
										? style.white
										: style.gray700
								}
								className={style.readMoreDiv}
								sx={{ marginTop: 'auto' }}
							>
								Read More
								<EastIcon sx={{ fontSize: '1rem' }} />
							</Typography>
						)}
					</Link>
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

			{ChildNode && <ChildNode.bottom />}
		</div>
	);
};

export default MainCardboard;

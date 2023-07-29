import { Fragment } from 'react';
import { Tables } from '../../types/globalTypes';
import style from './Table.module.sass';
import {
	Avatar,
	AvatarGroup,
	LinearProgress,
	TableCell,
	Typography,
	linearProgressClasses,
	styled,
} from '@mui/material';
import {
	Status,
	Table1Keys,
	Table2Keys,
	Table3Keys,
} from '../../constant/TablesMockData';
import { formatDateFromUnixTimestamp } from '../../constant/utils';

interface TableCellsProp {
	header: string[];
	rowObject: Tables['dataRow'];
	rowIndex: number;
}

interface DataCellsObject {
	img?: string;
	timestamp?: number;
	text?: string;
	subText?: string;
}

const TableCells = ({ header, rowObject, rowIndex }: TableCellsProp) => {
	const BorderLinearProgress = styled(LinearProgress)(({}) => ({
		height: '0.15rem',
		borderRadius: 20,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: style.gray200,
		},
	}));

	const cells = header.map((headerString, cellIndex) => {
		const tableCellData = rowObject[headerString as keyof typeof rowObject];

		switch (headerString) {
			case Table1Keys.Companies:
			case Table3Keys.Companies:
			case Table2Keys.Author:
			case Table2Keys.Function:
			case Table2Keys.Employed: {
				const { img, text, subText, timestamp } =
					tableCellData as unknown as DataCellsObject;

				return (
					<TableCell
						key={`Row: ${rowIndex} Column: ${cellIndex} = ${headerString}`}
					>
						<div className={style.cellBox}>
							{img !== undefined && (
								<img
									src={img}
									alt={img}
									data-imagewidth={headerString}
								/>
							)}
							<div className={style.cellTextBox}>
								{text && (
									<Typography variant={'body2'}>
										{text}
									</Typography>
								)}
								{timestamp && (
									<Typography variant={'body2'}>
										{formatDateFromUnixTimestamp(timestamp)}
									</Typography>
								)}
								{subText !== undefined && (
									<Typography
										variant={'caption'}
										fontWeight={'fontWeightLight'}
									>
										{subText}
									</Typography>
								)}
							</div>
						</div>
					</TableCell>
				);
			}

			case Table1Keys.Members:
				return (
					<TableCell
						key={`Row: ${rowIndex} Column: ${cellIndex} = ${headerString}`}
					>
						<div className={style.cellBox}>
							<AvatarGroup spacing={'small'}>
								{(tableCellData as unknown as string[]).map(
									(string) => (
										<Avatar
											key={string}
											alt={string}
											src={string}
											sx={{
												height: '1.5rem',
												width: '1.5rem',
											}}
										/>
									),
								)}
							</AvatarGroup>
						</div>
					</TableCell>
				);

			case Table1Keys.Budget:
			case Table3Keys.Budget:
				return (
					<TableCell
						key={`Row: ${rowIndex} Column: ${cellIndex} = ${headerString}`}
					>
						<div className={style.cellBox}>
							<Typography variant={'body2'}>
								{(tableCellData as unknown as number) !== null
									? `$ ${tableCellData as unknown as number}`
									: 'Not Set'}
							</Typography>
						</div>
					</TableCell>
				);

			case Table1Keys.Completion:
			case Table3Keys.Completion:
				return (
					<TableCell
						key={`Row: ${rowIndex} Column: ${cellIndex} = ${headerString}`}
					>
						<div>
							<Typography variant={'body2'}>
								{tableCellData as unknown as number}%
							</Typography>
							<BorderLinearProgress
								variant="determinate"
								value={tableCellData as unknown as number}
							/>
						</div>
					</TableCell>
				);

			case Table2Keys.Status:
			case Table3Keys.Status:
				return (
					<TableCell
						key={`Row: ${rowIndex} Column: ${cellIndex} = ${headerString}`}
					>
						<div className={style.cellBox}>
							<Typography
								variant={'body2'}
								className={style.statusBox}
								data-bgcolor={
									tableCellData as unknown as Status
								}
							>
								{tableCellData as unknown as Status}
							</Typography>
						</div>
					</TableCell>
				);

			default:
				return <></>;
		}
	});

	return <Fragment>{cells}</Fragment>;
};

export default TableCells;

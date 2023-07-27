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

interface TableCellsProp {
	header: string[];
	rowObject: Tables['dataRow'];
}

interface DataCellsObject {
	img?: string;
	text: string;
	subText?: string;
}

const TableCells = ({ header, rowObject }: TableCellsProp) => {
	const BorderLinearProgress = styled(LinearProgress)(({}) => ({
		height: '0.15rem',
		borderRadius: 20,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: style.gray200,
		},
	}));

	const cells = header.map((headerString) => {
		const tableCellData = rowObject[headerString as keyof typeof rowObject];

		switch (headerString) {
			case Table1Keys.Companies:
			case Table3Keys.Companies:
			case Table2Keys.Author:
			case Table2Keys.Function:
			case Table2Keys.Employed: {
				const { img, text, subText } =
					tableCellData as unknown as DataCellsObject;

				return (
					<TableCell>
						<div className={style.cellBox}>
							{img !== undefined && <img src={img} alt={img} />}
							<div className={style.cellTextBox}>
								<Typography ml={2}>{text}</Typography>
								{subText !== undefined && (
									<Typography>{subText}</Typography>
								)}
							</div>
						</div>
					</TableCell>
				);
			}

			case Table1Keys.Members:
				return (
					<TableCell>
						<div className={style.cellBox}>
							<AvatarGroup spacing={'small'}>
								{(tableCellData as unknown as string[]).map(
									(string) => (
										<Avatar
											alt={string}
											src={string}
											sx={{
												height: '1.8rem',
												width: '1.8rem',
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
					<TableCell>
						<div className={style.cellBox}>
							<Typography>
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
					<TableCell>
						<div>
							<Typography>
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
					<TableCell>
						<div className={style.cellBox}>
							<Typography>
								{tableCellData as unknown as Status}
							</Typography>
						</div>
					</TableCell>
				);

			default:
				return <></>;
		}
	});

	return <Fragment>{cells.map((cell) => cell)}</Fragment>;
};

export default TableCells;

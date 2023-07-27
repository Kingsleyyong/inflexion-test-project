import {
	Paper,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Table as MUITable,
	TableBody,
} from '@mui/material';
import { Tables } from '../../types/globalTypes';
import style from './Table.module.sass';
import TableCells from './TableCells';

const Table = ({ tableData }: { tableData: Tables }) => {
	const { header, dataRow } = tableData;
	return (
		<TableContainer component={Paper}>
			<MUITable aria-label="simple table">
				<TableHead>
					<TableRow>
						{header.map((key) => (
							<TableCell key={key}>
								<Typography>{key}</Typography>
							</TableCell>
						))}
					</TableRow>
				</TableHead>

				<TableBody className={style.tableBodyStyle}>
					{dataRow.map((rowObject, index) => (
						<TableRow key={`Row ${index + 1}`}>
							<TableCells
								header={header}
								rowObject={
									rowObject as unknown as Tables['dataRow']
								}
							/>
						</TableRow>
					))}
				</TableBody>
			</MUITable>
		</TableContainer>
	);
};

export default Table;

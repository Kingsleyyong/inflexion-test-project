import { CircularProgress, Typography } from '@mui/material';
import style from './Loading.module.sass';

const Loading = ({ showLoadingText }: { showLoadingText: boolean }) => {
	return (
		<div className={style.circularProgressParent}>
			<CircularProgress color={'primary'} />
			{showLoadingText && (
				<Typography variant={'h5'} m={3} color={style.gray700}>
					Please wait a moment...
				</Typography>
			)}
		</div>
	);
};

export default Loading;

import { Button, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';
import style from './Error.module.sass';
import { Tabs } from '../../types/globalTypes';

export default function ErrorPage() {
	const error: any = useRouteError();
	console.error(error);

	return (
		<div className={style.parent}>
			<Typography
				variant={'h1'}
				m={3}
				color={style.teal300}
				fontWeight={'bolder'}
			>
				Oops!
			</Typography>
			<Typography variant={'h6'}>
				Sorry, an unexpected error has occurred.
			</Typography>
			<p>
				<Typography variant={'caption'} fontStyle={'italic'}>
					Message: {error.statusText || error.message}
				</Typography>
			</p>

			<Button href={`/${Tabs.SIGNIN}`}>Back to Dashboard</Button>
		</div>
	);
}

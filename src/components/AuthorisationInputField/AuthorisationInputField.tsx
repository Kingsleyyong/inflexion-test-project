import {
	Button,
	FormControlLabel,
	Link,
	OutlinedInput,
	Switch,
	Typography,
} from '@mui/material';
import { RegistrationTextField } from '../../pages/SignUp/SignUpTypes';
import style from './AuthorisationInputField.module.sass';
import { Fragment } from 'react';
import { useLocation } from 'react-router';

const AuthorisationInputField = () => {
	const location = useLocation();

	return (
		<Fragment>
			{Object.keys(RegistrationTextField).map((key) => {
				const value =
					RegistrationTextField[
						key as keyof typeof RegistrationTextField
					];

				if (
					location.pathname === '/sign-in' &&
					value === RegistrationTextField.Name
				)
					return;

				return (
					<div className={style.textFileBox} key={key}>
						<Typography
							variant={'body2'}
							color={style.gray700}
							ml={1}
							lineHeight={2}
							fontWeight={400}
						>
							{key}
						</Typography>

						<OutlinedInput
							required
							placeholder={value}
							sx={{
								color: style.gray400,
								borderColor: style.gray200,
								borderRadius: '15px',
								width: '100%',
								height: '50%',
								marginBottom:
									location.pathname === '/sign-in'
										? '5%'
										: '0',
							}}
							type={
								value === RegistrationTextField.Password
									? 'password'
									: 'text'
							}
						></OutlinedInput>
					</div>
				);
			})}

			<div className={style.textFileBox}>
				<FormControlLabel
					control={<Switch defaultChecked />}
					label={
						<Typography
							variant={'body2'}
							fontWeight={400}
							color={style.gray700}
						>
							Remember me
						</Typography>
					}
				/>
			</div>

			<Button
				variant={'contained'}
				sx={{ width: '80%', borderRadius: '10px', margin: '3% 0' }}
			>
				<Typography color={style.white} variant={'overline'}>
					{location.pathname === '/sign-in' ? 'Sign In' : 'Sign Up'}
				</Typography>
			</Button>

			<div className={style.center}>
				<Typography
					variant={'overline'}
					fontWeight={400}
					textTransform={'initial'}
					color={style.gray400}
				>
					{location.pathname === '/sign-in'
						? `Don't have an account?`
						: 'Already have an account?'}
				</Typography>{' '}
				<Link
					underline={'none'}
					variant={'overline'}
					fontWeight={400}
					textTransform={'initial'}
					color={style.teal300}
					href={'#'}
				>
					{location.pathname === '/sign-in' ? 'Sign In' : 'Sign Up'}
				</Link>
			</div>
		</Fragment>
	);
};

export default AuthorisationInputField;

import {
	Button,
	FormControlLabel,
	Link,
	OutlinedInput,
	Switch,
	Typography,
	styled,
} from '@mui/material';
import Header from '../../components/Header/Header';
import { Images, LogosImage } from '../../constant/mockData';
import { DisplayTheme } from '../../types/globalTypes';
import style from './SignIn.module.sass';
import { RegistrationTextField } from './SignInTypes';
import Footer from '../../components/Footer/Footer';

const SignIn = () => {
	const TextDiv = styled(Typography)(({ theme }) => ({
		...theme.typography,
		color: style.white,
	}));

	return (
		<div className={style.parentBox}>
			<img
				className={style.backgroundBanner}
				src={Images.SignInPageBgBanner}
				alt="Page Banner"
				loading="lazy"
			/>

			<Header theme={DisplayTheme.LIGHT} className={style.header} />

			<div className={style.introDiv}>
				<TextDiv variant="h5" mt={0} fontWeight={600}>
					Welcome!
				</TextDiv>
				<TextDiv variant="body2" mt={1} fontWeight={200}>
					Use these awesome forms to login or create new account in
					your project for free.
				</TextDiv>
			</div>

			<div className={style.registrationDiv}>
				<Typography fontWeight={700} variant={'body1'}>
					Register with
				</Typography>

				<div className={style.signInLogo}>
					<img
						src={LogosImage.FacebookSignInLogo}
						alt="Facebook Sign In"
					/>
					<img src={LogosImage.AppleSignInLogo} alt="Apple Sign In" />
					<img
						src={LogosImage.GoogleSignInLogo}
						alt="Google Sign In"
					/>
				</div>

				<Typography
					variant={'overline'}
					textTransform={'lowercase'}
					fontWeight={700}
					color={style.gray400}
				>
					or
				</Typography>

				{Object.keys(RegistrationTextField).map((key) => {
					const value =
						RegistrationTextField[
							key as keyof typeof RegistrationTextField
						];
					return (
						<div className={style.textFileBox}>
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
					sx={{ width: '80%', borderRadius: '10px', margin: '3%' }}
				>
					<Typography color={style.white} variant={'overline'}>
						Sign Up
					</Typography>
				</Button>

				<div>
					<Typography
						variant={'overline'}
						fontWeight={400}
						textTransform={'initial'}
						color={style.gray400}
					>
						Already have an account?
					</Typography>{' '}
					<Link
						underline={'none'}
						variant={'overline'}
						fontWeight={400}
						textTransform={'initial'}
						color={style.teal300}
						href={'#'}
					>
						Sign in
					</Link>
				</div>
			</div>

			<Footer classname={style.header} />
		</div>
	);
};

export default SignIn;

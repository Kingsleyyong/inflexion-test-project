import { Typography, styled } from '@mui/material';
import Header from '../../components/Header/Header';
import { Images, LogosImage } from '../../constant/mockData';
import { DisplayTheme } from '../../types/globalTypes';
import style from './SignUp.module.sass';
import Footer from '../../components/Footer/Footer';
import AuthorisationInputField from '../../components/AuthorisationInputField/AuthorisationInputField';

const SignUp = () => {
	const TextDiv = styled(Typography)(({ theme }) => ({
		...theme.typography,
		color: style.white,
	}));

	return (
		<div className={style.parentBox}>
			<img
				draggable={false}
				className={style.backgroundBanner}
				src={Images.SignUpPageBgBanner}
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

				<div className={style.signUpLogo}>
					<img
						loading="lazy"
						src={LogosImage.FacebookLogo}
						alt="Facebook Sign In"
					/>
					<img
						loading="lazy"
						src={LogosImage.AppleLogo}
						alt="Apple Sign In"
					/>
					<img
						loading="lazy"
						src={LogosImage.GoogleLogo}
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

				<AuthorisationInputField />
			</div>

			<Footer classname={style.header} />
		</div>
	);
};

export default SignUp;

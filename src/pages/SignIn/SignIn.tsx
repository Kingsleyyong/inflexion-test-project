import { Typography } from '@mui/material';
import AuthorisationInputField from '../../components/AuthorisationInputField/AuthorisationInputField';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Images } from '../../constant/mockData';
import { DisplayTheme } from '../../types/globalTypes';

import style from './SignIn.module.sass';

const SignUp = () => {
	return (
		<div className={style.parentBox}>
			<Header theme={DisplayTheme.DARK} className={style.header} />

			<img
				draggable={false}
				className={style.backgroundImg}
				src={Images.SignInPageBgImg}
				alt="Sign In Background"
			/>

			<div className={style.signInBox}>
				<div className={style.welcomeDiv}>
					<Typography
						variant={'h4'}
						color={'primary'}
						fontWeight={600}
					>
						Welcome Back
					</Typography>

					<Typography
						variant={'overline'}
						textTransform={'initial'}
						fontWeight={700}
						color={style.gray400}
					>
						Enter your email and password to sign in
					</Typography>
				</div>

				<AuthorisationInputField />
			</div>

			<Footer classname={style.header} />
		</div>
	);
};

export default SignUp;

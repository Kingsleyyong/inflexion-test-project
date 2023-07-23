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

			<Footer classname={style.header} />
		</div>
	);
};

export default SignUp;

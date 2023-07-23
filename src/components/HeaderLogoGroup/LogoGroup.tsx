// SASS
import { LogosGroup } from '../Header/HeaderTypes';
import style from './LogoGroup.module.sass';

const LogoGroup = ({ logoImagePath, title, tabsType }: LogosGroup) => {
	return (
		<div key={title} className={style.logoGroup}>
			{logoImagePath.length !== 0 && (
				<img src={logoImagePath} alt={title} loading="lazy" />
			)}
			<span>{title}</span>
		</div>
	);
};

export default LogoGroup;

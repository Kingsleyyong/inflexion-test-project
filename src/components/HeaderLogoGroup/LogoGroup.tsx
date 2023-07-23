// SASS
import { DisplayTheme } from '../../types/globalTypes';
import { LogosGroup, TabsType } from '../Header/HeaderTypes';
import style from './LogoGroup.module.sass';

interface LogoGroupProp extends LogosGroup {
	theme: DisplayTheme;
}

const LogoGroup = ({
	theme,
	logoImagePath,
	title,
	tabsType,
}: LogoGroupProp) => {
	if (tabsType === TabsType.BUTTON)
		return (
			<div
				role="button"
				key={title}
				data-theme={theme}
				className={style.button}
			>
				{title}
			</div>
		);
	else
		return (
			<div
				key={title}
				className={`${tabsType === TabsType.LOGO && style.mainLogo}  ${
					style.logoGroup
				}`}
			>
				{logoImagePath.length !== 0 && (
					<img src={logoImagePath} alt={title} loading="lazy" />
				)}
				<span data-theme={theme}>{title}</span>
			</div>
		);
};

export default LogoGroup;

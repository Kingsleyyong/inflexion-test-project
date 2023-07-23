import { Link, Typography } from '@mui/material';
import style from './Footer.module.sass';

enum Links {
	ABOUT_US = 'About US',
	PRIVACY = 'Privacy',
	BLOG = 'Blog',
	License = 'License',
}

interface FooterProps {
	classname: string;
}

const Footer = ({ classname }: FooterProps) => {
	return (
		<div className={`${classname} ${style.footerDiv}`}>
			<Typography variant={'caption'} color={style.gray400}>
				© 2022, Made with ❤️ by
				<Link href={''} underline={'none'}>
					{' '}
					Tektorch{' '}
				</Link>
				for a better web
			</Typography>

			<div className={style.linkDiv}>
				{Object.values(Links).map((link) => (
					<Link
						key={link}
						underline={'none'}
						variant={'overline'}
						fontWeight={400}
						textTransform={'initial'}
						color={style.gray400}
						href={''}
					>
						{link}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Footer;

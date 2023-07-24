import {
	Breadcrumbs,
	IconButton,
	Link,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import style from './PageWrapperHeader.module.sass';
import { MainPageNavTabs, Tabs } from '../../types/globalTypes';
import { SearchOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface PageWrapperHeaderProps {
	pageTitle: MainPageNavTabs;
}
const PageWrapperHeader = ({ pageTitle }: PageWrapperHeaderProps) => {
	const CustomiseTextField = styled(TextField)({
		'& .MuiOutlinedInput-root': {
			background:
				'linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(0deg, #E2E8F0, #E2E8F0)',
			border: '0.5px solid rgba(226, 232, 240, 1)',
			borderRadius: '15px',
			marginRight: '3%',
		},
	});

	return (
		<div className={style.parentDiv}>
			<div>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color={style.gray400} href={''}>
						<Typography variant={'caption'}>Pages</Typography>
					</Link>
					<Link
						underline="hover"
						color="inherit"
						sx={{ textTransform: 'capitalize' }}
					>
						<Typography variant={'caption'}>
							{pageTitle.toLowerCase()}
						</Typography>
					</Link>
				</Breadcrumbs>
				<Typography
					variant={'caption'}
					color={style.gray700}
					textTransform={'capitalize'}
				>
					{pageTitle.toLowerCase()}
				</Typography>
			</div>

			<div className={style.rightButtons}>
				<CustomiseTextField
					size="small"
					variant="outlined"
					placeholder={'Type here...'}
					InputProps={{
						startAdornment: (
							<IconButton>
								<SearchOutlined />
							</IconButton>
						),
					}}
				/>

				<Link
					href={`/pages/${Tabs.SIGNIN}`}
					className={style.theButton}
				>
					<PersonIcon />
					<Typography variant={'caption'}>Sign In</Typography>
				</Link>

				<Link className={style.theButton}>
					<SettingsIcon />
				</Link>
				<Link className={style.theButton}>
					<NotificationsIcon />
				</Link>
			</div>
		</div>
	);
};

export default PageWrapperHeader;

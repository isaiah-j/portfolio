import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CodeIcon from '@material-ui/icons/Code';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import HomeIcon from '@material-ui/icons/Home';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

import { useRouter } from 'next/router';
import styles from '../../../styles/layout/bottom.module.scss';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: 'rgba(255, 255, 255, 0)'
	}
}));

export default function Bottom() {
	const router = useRouter();
	const classes = useStyles();

	const [ value, setValue ] = useState(0);

	return (
		<div className={styles.container}>
			<BottomNavigation
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.appBar}
			>
				<BottomNavigationAction
					onClick={() => router.push('/')}
					value="0"
					className={value == 0 ? styles.selected : styles.icon}
					label="Home"
					icon={<HomeIcon />}
				/>

				<BottomNavigationAction
					onClick={() => router.push('/portfolio')}
					value="1"
					className={value == 1 ? styles.selected : styles.icon}
					label="Portfolio"
					icon={<GavelRoundedIcon />}
				/>

				<BottomNavigationAction
					onClick={() => router.push('/contact')}
					value="2"
					className={value == 2 ? styles.selected : styles.icon}
					label="Contact"
					icon={<AddIcCallIcon />}
				/>
			</BottomNavigation>
		</div>
	);
}

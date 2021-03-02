import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import CardHeader from '@material-ui/core/CardHeader';

import GitHubIcon from '@material-ui/icons/GitHub';

import ComputerIcon from '@material-ui/icons/Computer';

import Link from 'next/link'

const useStyles = makeStyles({
	root: {
		maxWidth: 500
	},
	button: {
		color: 'black'
	},
	media: {
		clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
		maxHeight: 400
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: '6rem'
	}
});

export default function Project({ title, description, github, imgURL, website }) {
	const classes = useStyles();

	return (
		<Card className={classes.root} className="card">
			<CardActionArea>
				<CardMedia
					height={250}
					component="img"
					alt="Contemplative Reptile"
					image={imgURL}
					title="Contemplative Reptile"
					className={classes.media}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description.slice(0, 40) + ' ...'}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="" endIcon={<GitHubIcon size="large" />} className={classes.button}>
					<Link href={github} target="_blank" className={classes.button}>
						<a target="_blank">Github</a>
					</Link>
				</Button>
				<Button size="small" color="" endIcon={<ComputerIcon />} className={classes.button}>
					<Link href={website} target="_blank" className={classes.button}>
					<a target="_blank">Website</a>
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
}

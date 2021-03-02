import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Layout from '../components/layout';
import axios from 'axios';

import styles from '../styles/pages/contact.module.scss';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		color: 'white'
	}
}));

const Contact = ({ location }) => {
	const [ loading, setLoading ] = useState(false);

	const [ formValues, setFormValues ] = useState({
		email: '',
		name: '',
		description: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const mailOptions = {
			name: formValues.name,
			email: formValues.email,
			message: formValues.message
		};

		setFormValues({
			name: '',
			email: '',
			message: ''
		});

		setLoading(true);
		axios
			.post('https://simple-portfolio-mailer.herokuapp.com/contact', mailOptions)
			.then((res) => {
				alert('Your email has been sent. I will contact you as soon as possible');
			})
			.catch((err) => {
				console.log(err.response);
				alert('Unable to send email. Please try again or contact me via LinkedIn');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<div className={styles.fields}>
				<TextField
					InputProps={{
						style: { color: 'white' }
					}}
					style={{
						color: 'white'
					}}
					InputProps={{
						style: { color: 'white' }
					}}
					InputLabelProps={{
						style: { color: '#ff3232' }
					}}
					InputProps={{
						style: { color: 'white' }
					}}
					value={formValues.name}
					onChange={handleChange}
					color="secondary"
					type="text"
					label="Name"
					name="name"
					required
				/>
				<TextField
					InputProps={{
						style: { color: 'white' }
					}}
					InputLabelProps={{
						style: { color: '#ff3232' }
					}}
					value={formValues.email}
					onChange={handleChange}
					color="secondary"
					type="email"
					label="Email"
					name="email"
					required
				/>
				<TextField
					InputProps={{
						style: { color: 'white' }
					}}
					InputLabelProps={{
						style: { color: '#ff3232' }
					}}
					multiline
					rows={8}
					value={formValues.message}
					onChange={handleChange}
					color="secondary"
					type="text"
					label="How can I make your life easier?"
					name="message"
					required
				/>
				<Button
					style={{ color: '#ff3232', borderColor: '#ff3232' }}
					type="submit"
					color="secondary"
					variant="outlined"
				>
					Submit
				</Button>
			</div>
		</form>
	);
};

export default Contact;

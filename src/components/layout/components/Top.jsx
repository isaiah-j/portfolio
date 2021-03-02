import React from 'react';

import styles from '../../../styles/layout/top.module.scss';

export default function Top() {
	return (
		<navbar className={styles.container}>
			<div className={styles.links}>
				<a href="https://github.com/isaiah-j" target="_blank" className={styles.link}>
					GitHub
				</a>
				<a className={styles.link} href="https://www.linkedin.com/in/isaiah-fowler/" target="_blank">
					LinkedIn
				</a>
				<a className={styles.link} href="https://isaiah-j.github.io/resume/resume.pdf" target="_blank">
					Resume
				</a>
			</div>
		</navbar>
	);
}

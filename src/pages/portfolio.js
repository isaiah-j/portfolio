import React from 'react';

import projects from '../data/projects';

import Project from '../components/pages/portfolio/Project';

import styles from '../styles/pages/portfolio.module.scss';

export default function portfolio() {
	return (
		<div className={styles.container}>
			<div className={styles.projectList}>
				{projects.map((project) => {
					const { id, description, title, github, imgURL, website } = project;

					return (
						<div>
							<Project
								key={id}
								description={description}
								title={title}
								github={github}
								imgURL={imgURL}
								website={website}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

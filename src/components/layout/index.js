import React from 'react';

import { Bottom, Top, Particles } from './components';

export default function Index({ children: Children }) {
	return (
		<div>
			<div style={{ position: 'fixed', width: '100%' }}>
				<Particles />
			</div>
			<div>
				<Top />
				<main>{Children}</main>
				<Bottom />
			</div>
		</div>
	);
}

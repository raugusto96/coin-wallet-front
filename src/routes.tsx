import React from 'react';
import { Routes as Switch, Route } from 'react-router';

import { Login } from 'pages/Login';
import { Wallet } from 'pages/Wallet';

const Routes = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Route path="/" element={<Login />} />
				<Route path="/" element={<Wallet />} />
			</Switch>
		</>
	);
};

export default Routes;

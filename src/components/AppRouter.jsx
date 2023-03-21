import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'routes';
import Home from 'pages/HomePage';

const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map(({ path, element }) => (
				<Route key={path} path={path} element={element} exact />
			))}

			<Route path="*" element={<Home />} />
		</Routes>
	);
};

export default AppRouter;

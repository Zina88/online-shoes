import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'routes';
import Home from 'pages/HomePage';
import { Wrapper } from './AppRouter.styled';

const AppRouter = () => {
	return (
		<Wrapper>
			<Routes>
				{publicRoutes.map(({ path, element }) => (
					<Route key={path} path={path} element={element} exact />
				))}

				<Route path="*" element={<Home />} />
			</Routes>
		</Wrapper>
	);
};

export default AppRouter;

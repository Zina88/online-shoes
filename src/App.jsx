import React from 'react';
import NavBar from 'components/NavBar';
import AppRouter from 'components/AppRouter';
import Footer from 'components/Footer/Footer';
import gallery from './gallery.json';

const App = () => {
	return (
		<>
			<NavBar gallery={gallery} />
			<AppRouter />
			<Footer />
		</>
	);
};

export default App;

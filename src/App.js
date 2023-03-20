import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import { NaviBar } from './components/NaviBar';

import User from './pages/Header/User.js';
import Basket from './pages/Header/Basket.js';
import Items from './pages/Header/Items.js';

import { Home } from './pages/Home';
import { Bags } from './pages/Bags';
import { Sneakers } from './pages/Sneakers';
import { Belt } from './pages/Belt';
import { Contact } from './pages/Contact';

function App() {
	return (
		<>
			<NaviBar />
			<Routes>
				<Route path="/user" element={<User />} />
				<Route path="/basket" element={<Basket />} />
				<Route path="/items" element={<Items />} />

				<Route path="/" element={<Home />} />
				<Route path="/bags" element={<Bags />} />
				<Route path="/sneakers" element={<Sneakers />} />
				<Route path="/belt" element={<Belt />} />
				<Route path="/contact" element={<Contact />} />

				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;

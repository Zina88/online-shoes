import Profile from 'pages/Header/Profiles';
import Basket from 'pages/Header/Basket';
import Items from 'pages/Header/Items';

import Home from 'pages/HomePage';
import HotDeals from 'pages/HotDealsPage';
import Favorites from 'pages/FavoritesPage';
import History from 'pages/HistoryPage';
import Contact from 'pages/ContactPage';
import ProductPage from 'pages/ProductPage';

import {
	PROFILE,
	BASKET,
	ITEMS,
	HOME,
	HOT_DEAL,
	FAVORITES,
	HISTORY,
	CONTACT,
	PRODUCT,
} from 'utils/consts';

export const publicRoutes = [
	{
		path: PROFILE,
		element: <Profile />,
	},
	{
		path: BASKET,
		element: <Basket />,
	},
	{
		path: ITEMS,
		element: <Items />,
	},

	{
		path: HOME,
		element: <Home />,
	},
	{
		path: HOT_DEAL,
		element: <HotDeals />,
	},
	{
		path: FAVORITES,
		element: <Favorites />,
	},
	{
		path: HISTORY,
		element: <History />,
	},
	{
		path: CONTACT,
		element: <Contact />,
	},
	{
		path: PRODUCT + '/:id',
		element: <ProductPage />,
	},
];

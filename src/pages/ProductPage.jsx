import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gallery from 'gallery.json';
import Title from 'components/ProductPage/Title';
import Breadcrumb from 'components/ProductPage/Breadcrumb';

import { NavLink, useLocation } from 'react-router-dom';
import { HOME, HOT_DEAL, FAVORITES, HISTORY } from 'utils/consts';

const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const temporeryId = 1;

	const [crumbs, setCrumbs] = useState(['Home', 'Hot Deal', 'Favorite']);

	const selected = crumb => {
		console.log(crumb);
		<NavLink to={HOME} />;
	};

	useEffect(() => {
		setProduct(gallery.filter(i => i.id === temporeryId));
	}, []);

	return (
		<Container>
			<Breadcrumb product={product} crumbs={crumbs} selected={selected} />
			<Title product={product} />
		</Container>
	);
};

export default ProductPage;

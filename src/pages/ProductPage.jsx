import React, { useState, useEffect } from 'react';
import gallery from 'gallery.json';
import Breadcrumb from 'components/ProductPage/Breadcrumb';
import Title from 'components/ProductPage/Title';

const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const temporeryId = 1;

	useEffect(() => {
		setProduct(gallery.filter(i => i.id === temporeryId));
	}, []);

	return (
		<>
			<Breadcrumb product={product} />
			<Title product={product} />
		</>
	);
};

export default ProductPage;

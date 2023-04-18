import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gallery from 'gallery.json';
import Title from 'components/ProductPage/Title';

const ProductPage = () => {
	const [product, setProduct] = useState([]);
	const temporeryId = 1;

	useEffect(() => {
		setProduct(gallery.filter(i => i.id === temporeryId));
	}, []);

	return (
		<Container>
			<Title product={product} />
		</Container>
	);
};

export default ProductPage;

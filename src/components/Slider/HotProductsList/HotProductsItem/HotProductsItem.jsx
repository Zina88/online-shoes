import React from 'react';

import { CardProduct, ProductDetails, DetailsBuutom, Title } from './HotProductsItem.styled';
import { Image } from 'react-bootstrap';

const HotProductsItem = ({ products }) => {
	const { title, newPrise, oldPrise, productUrl } = products;

	const invoicePercentageDiscount = (newPrises, oldPrises) => {
		const discount = Math.round((newPrise * 100) / oldPrise);
		return discount;
	};

	return (
		<CardProduct as="li">
			<Image src={productUrl} alt="product" />
			<ProductDetails>
				<Title as="h4">{title}</Title>
			</ProductDetails>
			<DetailsBuutom>
				<small className="oldPrise">${oldPrise}</small>
				{invoicePercentageDiscount(`${newPrise}`, `${oldPrise}`)}% Off
				<p className="prise">${newPrise}</p>
			</DetailsBuutom>
		</CardProduct>
	);
};
export default HotProductsItem;

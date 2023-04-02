import React from 'react';
import { Image } from 'react-bootstrap';
import { CardProduct, ProductDetails, DetailsBuutom, Title } from './HotProductsItem.styled';

const HotProductsItem = ({ products }) => {
	const { title, newPrise, oldPrise, productUrl } = products;

	const invoicePercentageDiscount = (newPrises, oldPrises) => {
		const discount = Math.round((newPrise * 100) / oldPrise);
		return discount;
	};

	return (
		<CardProduct>
			<Image src={productUrl} alt="product" />
			<ProductDetails>
				<Title as="h4"> {title.length > 25 ? title.slice(0, 25) + '...' : title}</Title>
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

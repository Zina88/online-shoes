import React from 'react';
import { Image } from 'react-bootstrap';
import { CardProduct, ProductDetails, DetailsBuutom, Title } from './HotProductsItem.styled';
import percentageDiscount from '../../../../helpers/percentageDiscount';
const HotProductsItem = ({ products }) => {
	const { title, newPrise, oldPrise, productUrl } = products;

	return (
		<CardProduct>
			<Image src={productUrl} alt="product" />
			<ProductDetails>
				<Title as="h4"> {title.length > 25 ? title.slice(0, 25) + '...' : title}</Title>
			</ProductDetails>
			<DetailsBuutom>
				<small className="oldPrise">${oldPrise}</small>
				{percentageDiscount(`${newPrise}`, `${oldPrise}`)}% Off
				<p className="prise">${newPrise}</p>
			</DetailsBuutom>
		</CardProduct>
	);
};
export default HotProductsItem;

import React from 'react';
import {
	GalleryItem,
	CardWrapper,
	CardImg,
	CardDescription,
	CardName,
	StarWrapper,
	PriceWrapper,
	Price,
	OldPrice,
} from './ProductCart.styled';

import ReactStars from 'react-rating-stars-component';

const ProductCart = ({ item }) => {
	const { name, photo, price, old_price, rating } = item;
	const ratingSettings = {
		size: 20,
		value: rating,
		isHalf: true,
		color: '#C1C8CE',
		activeColor: '#FFC600',
	};
	return (
		<GalleryItem>
			<CardWrapper>
				<CardImg src={photo} alt={name} width={154} height={154} />
			</CardWrapper>
			<CardDescription>
				<CardName>{name.length > 20 ? name.slice(0, 20) + '...' : name} </CardName>
				<StarWrapper>
					<ReactStars {...ratingSettings} />
				</StarWrapper>
				<PriceWrapper>
					<Price> ${price}</Price>
					<OldPrice> ${old_price}</OldPrice>
				</PriceWrapper>
			</CardDescription>
		</GalleryItem>
	);
};
export default ProductCart;

import React from 'react';
import {
	GalleryItem,
	CardImg,
	CardDescription,
	CardName,
	StarWrapper,
	Price,
	PriceWrapper,
	OldPrice,
	Discount,
	HoverWrapper,
	HeartIcon,
	CartIcon,
	CardWrapper,
} from './BestSellersGalleryItem.styled.jsx';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

const BestSellersGalleryItem = ({ gallery }) => {
	const { id, name, photo, price, old_price, rating } = gallery;

	const settings = {
		size: 20,
		value: rating,
		isHalf: true,
		edit: false,
		color: '#C1C8CE',
		activeColor: '#FFC600',
	};

	return (
		<GalleryItem>
			<CardWrapper>
				<CardImg src={photo} alt={name} width={305} height={279} />
				<HoverWrapper>
					<HeartIcon onClick={() => console.log(`add to favorite ${id}`)} />
					<CartIcon onClick={() => console.log(`add to basket ${id}`)} />
				</HoverWrapper>
			</CardWrapper>

			<CardDescription>
				<CardName>{name.length > 15 ? name.slice(0, 15) + '...' : name}</CardName>
				<StarWrapper>
					<ReactStars {...settings} />
				</StarWrapper>
				<PriceWrapper>
					<Price>${price.toFixed(2)}</Price>
					{old_price ? (
						<>
							<OldPrice>${old_price}</OldPrice>
							<Discount>{Math.round(100 - (price * 100) / old_price)}% off</Discount>
						</>
					) : (
						''
					)}
				</PriceWrapper>
			</CardDescription>
		</GalleryItem>
	);
};

export default BestSellersGalleryItem;

BestSellersGalleryItem.propTypes = {
	gallery: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		old_price: PropTypes.number,
	}),
};

import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
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
	ButtonIcon,
	CardWrapper,
} from './BestSellersGalleryItem.styled.jsx';

const BestSellersGalleryItem = ({ gallery }) => {
	const { id, name, photo, price, old_price, rating } = gallery;

	const ratingSettings = {
		size: 20,
		value: rating,
		isHalf: true,
		color: '#C1C8CE',
		activeColor: '#FFC600',
		onChange: newValue => {
			console.log(`new rating card ${id} => ${newValue}`);
		},
	};

	return (
		<GalleryItem>
			<CardWrapper>
				<CardImg src={photo} alt={name} width={305} height={279} />
				<HoverWrapper>
					<ButtonIcon type="button" onClick={() => console.log(`add to favorite ${id}`)}>
						<HeartIcon />
					</ButtonIcon>
					<ButtonIcon type="button" onClick={() => console.log(`add to basket ${id}`)}>
						<CartIcon />
					</ButtonIcon>
				</HoverWrapper>
			</CardWrapper>

			<CardDescription>
				<CardName>{name.length > 15 ? name.slice(0, 15) + '...' : name}</CardName>
				<StarWrapper>
					<ReactStars {...ratingSettings} />
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

import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { StarWrapper, Quantity, Submit } from './Reviews.styled';
const Reviews = () => {
	const ratingSettings = {
		size: 20,
		// value: rating,
		isHalf: true,
		color: '#C1C8CE',
		activeColor: '#FFC600',
	};

	const loadMore = () => {
		console.log('Submit a review');
	};
	return (
		<StarWrapper>
			<ReactStars {...ratingSettings} />
			<Quantity> 0 reviews</Quantity>
			<Submit type="button" onClick={loadMore}>
				Submit a review
			</Submit>
		</StarWrapper>
	);
};
export default Reviews;

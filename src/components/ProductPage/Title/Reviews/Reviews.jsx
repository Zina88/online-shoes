import React from 'react';
import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Modal from 'react-bootstrap/Modal';
import { nanoid } from 'nanoid';

import { StarWrapper, Quantity, Submit } from './Reviews.styled';
import ModalReviews from 'components/ProductPage/Modal/Modal';
const Reviews = ({ rating }) => {
	const [show, setShow] = useState(false);
	const [reviews, setReviews] = useState([]);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const onSubmitForm = review => {
		setReviews(prev => {
			const newReview = {
				id: nanoid(),
				...review,
			};
			return [...prev, newReview];
		});
		console.log(review);
		handleClose();
	};
	const countReviews = reviews => {
		return reviews.length;
	};

	const ratingSettings = {
		size: 20,
		value: rating,
		isHalf: true,
		color: '#C1C8CE',
		activeColor: '#FFC600',
	};

	return (
		<StarWrapper>
			<Modal show={show} onHide={handleClose} animation={false}>
				<ModalReviews onSubmit={onSubmitForm} />
			</Modal>
			<ReactStars {...ratingSettings} />
			<Quantity> {countReviews(reviews)} reviews</Quantity>
			<Submit type="button" onClick={handleShow}>
				Submit a review
			</Submit>
		</StarWrapper>
	);
};
export default Reviews;

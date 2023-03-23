import React from 'react';

import { CardProduct, ProductDetails, DetailsBuutom } from './CarouselItem.styled';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const CarouselItem = () => {
	const invoicePercentageDiscount = (newPrise, oldPrise) => {
		const discount = Math.round((newPrise * 100) / oldPrise);
		return discount;
	};

	return (
		<CardProduct>
			<Image
				src="https://res.cloudinary.com/dydrn79zd/image/upload/v1679513287/online-shop/product_rjtc64.png"
				alt="product"
			/>
			<ProductDetails>
				<h4 className="title">
					FS - Nike Air <br />
					Max 270 React...{' '}
				</h4>
				<p className="prise">$299,43</p>
			</ProductDetails>
			<DetailsBuutom>
				<small className="oldPrise">$534,33</small> {invoicePercentageDiscount(299, 546)}% Off
			</DetailsBuutom>
		</CardProduct>
	);
};
export default CarouselItem;

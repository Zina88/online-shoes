import React from 'react';
import Reviews from '../Reviews/Reviews';

import {
	Wrapper,
	CartProduct,
	ImgProduct,
	Heading,
	InfoWrapper,
	PriseWrapper,
	ListInfo,
} from './Title.styled';
import percentageDiscount from '../../../helpers/percentageDiscount';
const Title = ({ product }) => {
	console.log(product);

	return (
		<Wrapper>
			{product.map(({ photo, name, price, rating, id, category, stock_quantity, old_price }) => (
				<CartProduct key={id}>
					<ImgProduct src={photo} alt={name} width="375" />
					<div>
						<Heading>{name}</Heading>
						<Reviews rating={rating} />
						<InfoWrapper>
							<PriseWrapper>
								<p className="prise">${price}</p>
								{old_price ? (
									<>
										<small className="oldPrise">${old_price}</small>
										<p className="discount">
											{' '}
											{percentageDiscount(`${price}`, `${old_price}`)}% Off
										</p>
									</>
								) : (
									' '
								)}
							</PriseWrapper>
							<ListInfo>
								<li className="itemInfo">
									<p className="text">Availability:</p>
									{stock_quantity ? <p>{stock_quantity}</p> : 'Out of Stock'}
								</li>
								<li className="itemInfo">
									<p className="text">Category:</p>
									<p>{category}</p>
								</li>
							</ListInfo>
						</InfoWrapper>
					</div>
				</CartProduct>
			))}
		</Wrapper>
	);
};

export default Title;

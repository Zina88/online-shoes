import React from 'react';
import Reviews from './Reviews/Reviews';
import Information from './Information/Information';
import { Wrapper, CartProduct, ImgProduct, Heading } from './Title.styled';

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
						<Information
							price={price}
							category={category}
							stock_quantity={stock_quantity}
							old_price={old_price}
						/>
					</div>
				</CartProduct>
			))}
		</Wrapper>
	);
};

export default Title;

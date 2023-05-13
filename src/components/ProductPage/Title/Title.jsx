import React from 'react';
import Reviews from './Reviews/Reviews';
import Information from './Information/Information';
import { Wrapper, CartProduct, Heading } from './Title.styled';
import { Container } from 'react-bootstrap';

import GallaryProduct from './GallaryProduct/GallaryProduct';

const Title = ({ product }) => {
	console.log(product);

	return (
		<Container>
			<Wrapper>
				{product.map(
					({ photo, name, price, rating, id, category, stock_quantity, old_price, images }) => (
						<CartProduct key={id}>
							<div>
								<GallaryProduct images={images} />
							</div>

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
					),
				)}
			</Wrapper>
		</Container>
	);
};

export default Title;

import React from 'react';
import Invisible from 'components/shared/Invisible';
import { Container } from 'react-bootstrap';
import { Section, ProductTitle, ProductDescription, ProductButtom } from './ProductDay.styled';

const ProductDay = () => {
	const showNow = () => {
		console.log('show now');
	};

	return (
		<Section>
			<Container>
				<Invisible text={'Product of the day'} />
				<ProductTitle>
					Adidas Men Running <br />
					Sneakers
				</ProductTitle>
				<ProductDescription>
					Performance and design. <br />
					Taken right to the edge.
				</ProductDescription>
				<ProductButtom onClick={showNow}>Shop now</ProductButtom>
			</Container>
		</Section>
	);
};

export default ProductDay;

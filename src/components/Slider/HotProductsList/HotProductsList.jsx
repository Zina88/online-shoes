import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import CarouselItem from './HotProductsItem/HotProductsItem';
import products from '../../../product';
import { Section } from './HotProductsList.styled';
const HotProductsList = () => {
	return (
		<Section>
			<Container>
				<ListGroup
					horizontal
					as="ul"
					className="list"
					style={{
						position: 'relative',
						bottom: 64,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{products.map(products => (
						<CarouselItem products={products} key={products.id} />
					))}
				</ListGroup>
			</Container>
		</Section>
	);
};

export default HotProductsList;

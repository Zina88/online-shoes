import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Wrapper } from './FeaturedProducts.styled';
import SectionTitle from 'components/shared/SectionTitle';
import ProductCart from './ProductCart/ProductCart';
import gallery from 'featuredGallery.json';

const FeaturedProducts = () => {
	return (
		<Wrapper>
			<Container>
				<SectionTitle text="FEATURED PRODUCTS" />

				<Row as="ul" xs={1} sm={2} md={3} className={'mb-3 p-2'}>
					{gallery.map(item => (
						<Col as="li" className={'p-3'} key={item.id}>
							<ProductCart item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</Wrapper>
	);
};
export default FeaturedProducts;

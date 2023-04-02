import React from 'react';
// import Invisible from 'components/Shared/Invisible';
import {
	Section,
	Wrapper,
	ProductTitle,
	ProductDescription,
	ProductButtom,
} from './ProductDay.styled';

const ProductDay = () => {
	return (
		<Section>
			<Wrapper>
				{/* <Invisible text={'Product of the day'} /> */}
				<ProductTitle>
					Adidas Men Running <br />
					Sneakers
				</ProductTitle>
				<ProductDescription>
					Performance and design. <br />
					Taken right to the edge.
				</ProductDescription>
				<ProductButtom type="button">Shop now</ProductButtom>
			</Wrapper>
		</Section>
	);
};

export default ProductDay;

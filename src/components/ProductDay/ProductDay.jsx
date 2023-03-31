import React from 'react';
import shoes from 'assets/img/productDay/shoes-shoe.png';
import {
	Section,
	Wrapper,
	ProductTitle,
	ProductDescription,
	ProductButtom,
	Img,
} from './ProductDay.styled';

const ProductDay = () => {
	return (
		<Section>
			<Wrapper>
				<div>
					<ProductTitle>
						Adidas Men Running <br />
						Sneakers
					</ProductTitle>
					<ProductDescription>
						Performance and design. <br />
						Taken right to the edge.
					</ProductDescription>
					<ProductButtom type="button">Shop now</ProductButtom>
				</div>

				<Img src={shoes} alt="shoes" width={794} />
			</Wrapper>
		</Section>
	);
};

export default ProductDay;

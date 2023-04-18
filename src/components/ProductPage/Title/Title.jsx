import React from 'react';

const Title = ({ product }) => {
	console.log(product);

	return (
		<div>
			{product.map(({ photo, name, price, id }) => (
				<div key={id}>
					<img src={photo} alt={name} width="150" />
					<p>{name}</p>
					<p>{price}</p>
				</div>
			))}
		</div>
	);
};

export default Title;

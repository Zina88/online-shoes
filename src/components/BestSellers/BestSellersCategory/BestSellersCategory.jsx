import React from 'react';
import { CategoryList, CategoryItem, CategoryBtn } from './BestSellersCategory.styled';
import PropTypes from 'prop-types';

const BestSellersCategory = ({ chooseCategory }) => {
	const initialState = [
		{
			key: 'all',
			name: 'All',
		},
		{
			key: 'bags',
			name: 'Bags',
		},
		{
			key: 'sneakers',
			name: 'Sneakers',
		},
		{
			key: 'belt',
			name: 'Belt',
		},
		{
			key: 'sunglasses',
			name: 'Sunglasses',
		},
	];

	return (
		<CategoryList>
			{initialState.map(({ key, name }) => (
				<CategoryItem key={key}>
					<CategoryBtn onClick={() => chooseCategory(key)}>{name}</CategoryBtn>
				</CategoryItem>
			))}
		</CategoryList>
	);
};

export default BestSellersCategory;

BestSellersCategory.propTypes = {
	chooseCategory: PropTypes.func,
};

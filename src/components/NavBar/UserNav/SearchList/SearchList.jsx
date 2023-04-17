import React from 'react';
import PropTypes from 'prop-types';
import {
	WrapperSearch,
	Search,
	SearchItem,
	SearchImg,
	SearchText,
	SearchPrice,
} from './SearchList.styled';


const SearchList = ({ filtered }) => {
	return (
		<WrapperSearch>
			<Search>
				{filtered.slice(0, 15).map(({ id, photo, name, price }) => (
					<SearchItem key={id}>
						<SearchImg src={photo} alt={name} width="70" />
						<SearchText>{name}</SearchText>
						<SearchPrice>{price.toFixed(2)}</SearchPrice>
					</SearchItem>
				))}
			</Search>
		</WrapperSearch>
	);
};

SearchList.propTypes = {
	filtered: PropTypes.array,
};

export default SearchList;

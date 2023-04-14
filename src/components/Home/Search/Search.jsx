import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { InputSearch, SearchInputBtn, Input, SearchClearInputBtn } from './Search.styled';
import Invisible from 'components/shared/Invisible/Invisible';
import SearchList from 'components/Home/Search/SearchList';

const Search = ({ gallery }) => {
	const [value, setValue] = useState('');
	const [filtered, setFiltered] = useState([]);

	const handleQueryChange = e => {
		setValue(e.currentTarget.value.toLowerCase());
	};

	const handleSubmit = e => {
		e.preventDefault();
		const searchWord = value;
		setValue(searchWord);

		const newFilter = gallery.filter(({ name, brand, category }) => {
			return (
				name.toLowerCase().includes(searchWord) ||
				brand.toLowerCase().includes(searchWord) ||
				category.toLowerCase().includes(searchWord)
			);
		});

		setFiltered(newFilter);
	};

	const clearInput = e => {
		e.preventDefault();
		setFiltered([]);
		setValue('');
	};

	return (
		<section>
			<Container>
				<Invisible text="Search section" />

				<InputSearch onSubmit={handleSubmit}>
					<Input
						onChange={handleQueryChange}
						value={value}
						placeholder="Search query..."
						type="text"
						name="query"
					/>
					{filtered.length === 0 ? (
						<SearchInputBtn type="submit">Search</SearchInputBtn>
					) : (
						<SearchClearInputBtn onClick={clearInput} type="button">
							Close
						</SearchClearInputBtn>
					)}
				</InputSearch>

				{filtered.length !== 0 && <SearchList filtered={filtered} />}
			</Container>
		</section>
	);
};

Search.propTypes = {
	gallery: PropTypes.array,
};

export default Search;

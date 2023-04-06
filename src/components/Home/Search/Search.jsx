import React from 'react';
import { Container } from 'react-bootstrap';
import { InputSearch, SearchInputBtn, Input } from './Search.styled';
import Invisible from 'components/shared/Invisible/Invisible';

const Search = () => {
	const handleSearch = e => {
		e.preventDefault();
		const value = e;
		console.dir(value);
	};

	return (
		<section>
			<Container>
				<Invisible text="Search section" />
				<InputSearch>
					<Input
						placeholder="Search query..."
						aria-label="Search query..."
						aria-describedby="basic-addon2"
					/>
					<SearchInputBtn variant="none" id="button-addon2" onSubmit={handleSearch}>
						Search
					</SearchInputBtn>
				</InputSearch>
			</Container>
		</section>
	);
};

export default Search;

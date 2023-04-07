import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
	InputSearch,
	SearchInputBtn,
	Input,
	WrapperSearch,
	SearchList,
	SearchItem,
} from './Search.styled';
import Invisible from 'components/shared/Invisible/Invisible';
import gallery from '../../../gallery.json';

console.log(gallery);

const Search = () => {
	const [search, setSearch] = useState([]);

	const handleSearch = e => {
		e.preventDefault();
		const value = e.currentTarget.elements.query.value;

		if (value.trim() === '') {
			return alert('Search field cannot be empty');
		}

		if (gallery.some(i => i.brand === value)) {
			setSearch(gallery.filter(i => i.brand === value));
			e.currentTarget.elements.query.value = '';
			return search;
		}

		if (gallery.some(i => i.brand !== value)) {
			alert(`"${value}" - Not found`);
			e.currentTarget.elements.query.value = '';
			return;
		}
	};

	return (
		<section>
			<Container>
				<Invisible text="Search section" />

				<InputSearch onSubmit={handleSearch}>
					<Input placeholder="Search query..." type="text" name="query" />
					<SearchInputBtn variant="none" type="submit">
						Search
					</SearchInputBtn>
				</InputSearch>
				<WrapperSearch>
					<SearchList>
						{search.map(i => (
							<SearchItem key={i.id}>
								<img src={i.photo} alt={i.name} width="70" />
								<p>{i.name}</p>
								<p>{i.price}</p>
							</SearchItem>
						))}
						{search.length > 0 ? (
							<button onClick={() => setSearch([])} type="button">
								close
							</button>
						) : (
							''
						)}
					</SearchList>
				</WrapperSearch>
			</Container>
		</section>
	);
};

export default Search;

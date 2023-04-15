import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
	Navigation,
	Wrapper,
	Navdropdown,
	Navlink,
	SearchButton,
	InputSearch,
	SearchInputBtn,
	InputWrapper,
	Input,
	NavAuth,
	Collapse,
	DropdownWrapper,
	Item,
	NavBtn,
	Cart,
	CartText,
	Profile,
	Sum,
	Search,
	Quest,
	Clear,
	SearchWrapper,
	NavWrapper,
	SearchClearInputBtn,
} from './UserNav.styled.jsx';
import { PROFILE, BASKET, ITEMS } from 'utils/consts';
import SearchList from 'components/NavBar/UserNav/SearchList';

const UserNav = ({ gallery }) => {
	const [search, setSearch] = useState(false);
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

		if (searchWord.trim() === '') {
			alert('Request field is empty. ');
		} else {
			setFiltered(newFilter);
		}

		if (newFilter.length === 0) {
			alert(`${searchWord} - not found`);
			return setValue('');
		}
	};

	const clearInput = e => {
		e.preventDefault();
		setFiltered([]);
		setValue('');
	};

	const handleSearch = () => {
		setSearch(!search);
	};

	return (
		<>
			<Navigation collapseOnSelect expand="xl">
				<Wrapper>
					<NavBtn aria-controls="responsive-navbar-nav" id="responsive-navbar-nav" />
					<Collapse id="responsive-navbar-lang">
						<DropdownWrapper>
							<Navdropdown title="EN">
								<Navdropdown.Item>EN</Navdropdown.Item>
								<Navdropdown.Item>UA</Navdropdown.Item>
							</Navdropdown>

							<Navdropdown title="USD">
								<Navdropdown.Item>USD</Navdropdown.Item>
								<Navdropdown.Item>UAH</Navdropdown.Item>
							</Navdropdown>
						</DropdownWrapper>

						{!search ? (
							<NavAuth>
								<NavWrapper className="ms-auto">
									<Item as="li">
										<Navlink to={PROFILE}>
											<Profile />
											my profile
										</Navlink>
									</Item>
									<Item as="li">
										<Navlink to={BASKET}>
											<Cart />
											<CartText>basket</CartText>
										</Navlink>
									</Item>
									<Item as="li">
										<Navlink to={ITEMS}>items</Navlink>
									</Item>
								</NavWrapper>
								<Sum>$0.00</Sum>

								<SearchWrapper>
									<SearchButton variant="none" onClick={handleSearch}>
										<Search />
									</SearchButton>
								</SearchWrapper>
							</NavAuth>
						) : (
							<InputWrapper>
								<InputSearch onSubmit={handleSubmit}>
									<Input
										onChange={handleQueryChange}
										value={value}
										placeholder="Enter product name"
										type="text"
										name="query"
										aria-label="Enter product name"
										aria-describedby="basic-addon2"
									/>
									{filtered.length === 0 ? (
										<>
											<SearchInputBtn variant="none" type="submit">
												<Quest />
											</SearchInputBtn>
											<SearchInputBtn type="button" variant="none" onClick={handleSearch}>
												<Clear />
											</SearchInputBtn>
										</>
									) : (
										<SearchClearInputBtn onClick={clearInput} type="button">
											<Clear />
										</SearchClearInputBtn>
									)}
								</InputSearch>
								{filtered.length !== 0 && <SearchList filtered={filtered} />}
							</InputWrapper>
						)}
					</Collapse>
				</Wrapper>
			</Navigation>
		</>
	);
};

export default UserNav;

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
	Navigation,
	Navdropdown,
	Navlink,
	SearchButton,
	InputSearch,
	SearchInputBtn,
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
	SearchWrapper,
	NavWrapper,
} from './UserNav.styled.jsx';
import { PROFILE, BASKET, ITEMS } from 'utils/consts';

const UserNav = () => {
	const [search, setSearch] = useState(false);

	const handleSearch = () => {
		setSearch(!search);
	};

	return (
		<>
			<Navigation collapseOnSelect expand="xl">
				<Container>
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
							<InputSearch>
								<Input
									placeholder="Enter product name"
									aria-label="Enter product name"
									aria-describedby="basic-addon2"
								/>
								<SearchInputBtn variant="none" id="button-addon2" onClick={handleSearch}>
									<Search />
								</SearchInputBtn>
							</InputSearch>
						)}
					</Collapse>
				</Container>
			</Navigation>
		</>
	);
};

export default UserNav;

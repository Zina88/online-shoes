import React, { useState } from 'react';
import { Container, Nav  } from 'react-bootstrap';
import { Navigation, Dropdown, Navlink, SearchButton, InputSearch, SearchInputBtn, Input, NavAuth, Collapse, DropdownWrapper } from './UserNav.styled.jsx';
import { PROFILE, BASKET, ITEMS } from 'utils/consts';

import { ReactComponent as ProfileIcon } from 'assets/icons/profileIcon.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cartIcon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';

const UserNav = () => {
	const [search, setSearch] = useState(false);

	const handleSearch = () => {
		setSearch(!search);
	};

	return (
		<>
			<Navigation collapseOnSelect expand="lg" >
				<Container>
					<Navigation.Toggle aria-controls="responsive-navbar-lang" />
					<Collapse id="responsive-navbar-lang">
						<DropdownWrapper>
						<Dropdown 
						 title="EN">
							<Dropdown.Item href="#action1">EN</Dropdown.Item>
							<Dropdown.Item href="#action2">UA</Dropdown.Item>
						</Dropdown>

						<Dropdown 
						title="USD">
							<Dropdown.Item href="#action1">USD</Dropdown.Item>
							<Dropdown.Item href="#action2">UAH</Dropdown.Item>
						</Dropdown>
						</DropdownWrapper>

						{!search ? (
							<NavAuth>
								<Nav className="ms-auto">
									<Navlink 
									 to={PROFILE}>
										<ProfileIcon style={{ width: 20 }} />
										my profile
									</Navlink>
									<Navlink
									to={BASKET}>
										<CartIcon style={{ width: 20 }} />
									</Navlink>
									<Navlink 
									to={ITEMS}>
										items
									</Navlink>
								</Nav>
								<div>$0.00</div>

								<SearchButton variant='none'
								onClick={handleSearch}>
									<SearchIcon style={{ width: 24 }} />
								</SearchButton>
							</NavAuth>
						) : (
							<InputSearch>
								<Input 
									placeholder="Enter product name"
									aria-label="Enter product name"
									aria-describedby="basic-addon2"
								/>
								<SearchInputBtn variant='none'
								id="button-addon2" onClick={handleSearch}>
									<SearchIcon style={{ width: 24 }}  />
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

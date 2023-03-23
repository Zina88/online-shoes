import styled from 'styled-components';
import { Navbar, NavDropdown, Button, InputGroup, Form, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from 'assets/icons/profileIcon.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cartIcon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';

export const Cart = styled(CartIcon)`
	display: none;

	@media (min-width: 1200px) {
		display: inline;
		width: 20px;
		height: 20px;
	}
`;

export const CartText = styled.div`
	@media (min-width: 1200px) {
		display: none;
	}
`;

export const Profile = styled(ProfileIcon)`
	display: none;

	@media (min-width: 1200px) {
		display: inline;
		width: 20px;
		height: 20px;
	}
`;

export const Search = styled(SearchIcon)`
	width: 32px;
	height: 32px;
	fill: ${p => p.theme.colors.dark};

	@media (min-width: 1200px) {
		display: inline;
		width: 24px;
		height: 24px;
		fill: ${p => p.theme.colors.primary};
	}
`;

export const Navigation = styled(Navbar)`
	border-bottom: 2px solid #fafafb;
	position: relative;
	height: 70px;

	@media (min-width: 1200px) {
		padding-top: 26px;
		padding-bottom: 18px;
	}
`;

export const NavBtn = styled(Navbar.Toggle)`
	margin: 10px 0;

	&:focus,
	&:hover {
		border: 2px solid ${p => p.theme.colors.success};
		box-shadow: none;
	}
`;

export const Collapse = styled(Navbar.Collapse)`
	@media (max-width: 1199px) {
		margin-top: 3px;
		box-shadow: ${p => p.theme.boxShadow.primary};
		border-radius: 15px;
		padding: 20px;
		background-color: ${p => p.theme.colors.navbackground};
		z-index: 2;
	}
`;

export const DropdownWrapper = styled.div`
	@media (max-width: 1200px) {
		padding-bottom: 10px;
		font-size: 36px;
		display: flex;
		justify-content: start;
		border-bottom: 1px solid #fafafb;
	}

	@media (min-width: 1200px) {
		display: flex;
	}
`;

export const Navdropdown = styled(NavDropdown)`
	margin-right: 13px;
	font-family: ${p => p.theme.fonts.raleway};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 16px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.primary};

	@media (max-width: 1200px) {
		font-size: 24px;
		margin-right: 20px;
	}
	&:last-child {
		margin-right: 0;
	}
`;
export const NavAuth = styled.div`
	@media (max-width: 1200px) {
		display: block;
		align-items: center;
	}

	display: flex;
	margin-left: auto;
	align-items: center;
`;

export const Item = styled(Dropdown.Item)`


	@media (max-width: 1199px) {
		padding-top: 30px;
		margin-bottom: 40px;
	}
`;

export const Navlink = styled(NavLink)`
	font-size: 38px;
	margin-right: 0;
	margin-bottom: 70px;
	color: inherit;
	margin-bottom: 30px;
	font-family: ${p => p.theme.fonts.raleway};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.normal};
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.secondary};
	transition: color 300ms ${p => p.theme.transition.primary},
		fill 300ms ${p => p.theme.transition.primary};

	@media (min-width: 768px) {
		font-size: 42px;
	}

	@media (min-width: 1200px) {
		font-size: 20px;
		margin-right: 32px;
	}

	&:hover,
	&:focus,
	&.active {
		color: ${p => p.theme.colors.success};
		fill: ${p => p.theme.colors.success};
	}
`;

export const Sum = styled.div`
	@media (max-width: 1199px) {
		font-size: 32px;
		color: ${p => p.theme.colors.light};
		text-align: end;
		border-top: 1px solid #fafafb;
		border-bottom: 1px solid #fafafb;
	}
`;

export const SearchWrapper = styled.div`
	@media (max-width: 1200px) {
		text-align: right;
	}
`;

export const SearchButton = styled(Button)`
	border: none;
	transition: fill 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus,
	&:active {
		fill: ${p => p.theme.colors.success};
	}
`;

export const InputSearch = styled(InputGroup)`
	min-width: 250px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1200px) {
		margin-left: auto;
		width: 500px;
	}
`;

export const Input = styled(Form.Control)`
	color: ${p => p.theme.colors.dark};
	border: 1px solid ${p => p.theme.colors.success};
	outline: none;
	transition: border 300ms ${p => p.theme.transition.primary},
		box-shadow 300ms ${p => p.theme.transition.primary},
		color 300ms ${p => p.theme.transition.primary};

	&::placeholder {
		color: ${p => p.theme.colors.light};
	}

	&:hover,
	&:focus,
	&:active {
		border: 1px solid ${p => p.theme.colors.dark};
		box-shadow: none;
		color: ${p => p.theme.colors.success};
	}
`;

export const SearchInputBtn = styled(Button)`
	fill: ${p => p.theme.colors.dark};
	background-color: ${p => p.theme.colors.white};
	border: 1px solid ${p => p.theme.colors.success};
	transition: border 300ms ${p => p.theme.transition.primary},
		fill 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		border: 1px solid ${p => p.theme.colors.dark};
		fill: ${p => p.theme.colors.success};
	}
`;

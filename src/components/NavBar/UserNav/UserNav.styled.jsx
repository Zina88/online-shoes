import styled from 'styled-components';
import { Navbar, NavDropdown, Button, Container, Form, Dropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from 'assets/icons/profileIcon.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cartIcon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';
import { ReactComponent as ClearIcon } from 'assets/icons/clear.svg';

export const Navigation = styled(Navbar)`
	border-bottom: 2px solid #fafafb;
	height: 70px;

	@media (min-width: 1200px) {
		padding-top: 26px;
		padding-bottom: 18px;
	}
`;

export const Wrapper = styled(Container)`
	position: relative;
	height: 50px;
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
	@media (max-width: 1199px) {
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

	@media (max-width: 1199px) {
		font-size: 24px;
		margin-right: 20px;
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const NavAuth = styled.div`
	display: block;

	@media (min-width: 1200px) {
		display: flex;
		margin-left: auto;
		align-items: center;
	}
`;

export const NavWrapper = styled(Nav)`
	@media (max-width: 1199px) {
		padding: 30px 0;
	}
`;

export const Item = styled(Dropdown.Item)`
	@media (max-width: 1199px) {
		margin-bottom: 30px;

		&:last-child {
			margin-bottom: 0;
		}
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

export const Profile = styled(ProfileIcon)`
	display: none;

	@media (min-width: 1200px) {
		display: inline;
		width: 20px;
		height: 20px;
	}
`;

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
`;

export const Search = styled(SearchIcon)`
	width: 40px;
	height: 40px;
	fill: ${p => p.theme.colors.dark};
	transition: fill 300ms ${p => p.theme.transition.primary};

	@media (min-width: 1200px) {
		width: 24px;
		height: 24px;
		fill: ${p => p.theme.colors.primary};
	}

	&:hover,
	&:focus {
		fill: ${p => p.theme.colors.success};
	}
`;

export const Quest = styled(SearchIcon)`
	width: 25px;
	height: 25px;
	fill: ${p => p.theme.colors.white};

	@media (min-width: 1200px) {
		display: inline;
		width: 24px;
		height: 24px;
	}
`;

export const Clear = styled(ClearIcon)`
	width: 25px;
	height: 25px;
	fill: ${p => p.theme.colors.white};

	@media (min-width: 1200px) {
		width: 24px;
		height: 24px;
	}
`;

export const InputWrapper = styled.div`
	z-index: 999;
	width: 100%;

	@media (min-width: 1200px) {
		margin-left: auto;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const InputSearch = styled(Form)`
	min-width: 250px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
	}

	@media (min-width: 1200px) {
		margin-left: auto;
		width: 500px;
	}
`;

export const Input = styled(Form.Control)`
	border: 1px solid ${p => p.theme.colors.success};
	border-radius: 5px 0 0 5px;
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
		border: 1px solid ${p => p.theme.colors.info};
		box-shadow: none;
		color: ${p => p.theme.colors.success};
	}
`;

export const SearchInputBtn = styled(Button)`
	background-color: ${p => p.theme.colors.success};
	border-radius: 0;
	border: none;
	transition: background-color 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		background-color: ${p => p.theme.colors.info};
	}

	&:last-child {
		border-radius: 0 5px 5px 0;
		border-left: 1px solid ${p => p.theme.colors.white};
	}
`;

export const SearchClearInputBtn = styled(Button)`
	height: 38px;
	width: 50px;

	fill: ${p => p.theme.colors.dark};
	background-color: ${p => p.theme.colors.success};
	border: none;
	border-radius: 0 5px 5px 0;

	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};

	transition: background-color 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		background-color: ${p => p.theme.colors.info};
		color: white;
	}

	@media (min-width: 576px) {
		/* width: 90px; */
	}

	@media (min-width: 768px) {
		/* width: 100px; */
	}

	@media (min-width: 1200px) {
		/* width: 127px;
		height: 64px;
		font-size: 20px; */
	}
`;

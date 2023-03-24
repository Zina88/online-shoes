import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HOME, HOT_DEAL, FAVORITES, HISTORY, CONTACT } from 'utils/consts';
import logo from 'assets/img/logo.png';
import {
	Navigation,
	NavLogo,
	LogoImg,
	NavPage,
	Collapse,
	Item,
	NavBtn,
} from './ShopNav.styled.jsx';

const ShopNav = () => {
	return (
		<>
			<Navigation collapseOnSelect expand="xl" variant="light" style={{ padding: 0 }}>
				<Container>
					<Navbar.Brand>
						<NavLogo to={HOME}>
							<LogoImg src={logo} alt={logo} width="50" />
							Shoes
						</NavLogo>
					</Navbar.Brand>

					<NavBtn aria-controls="responsive-navbar-nav" />
					<Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Item as="li">
								<NavPage to={HOME}>Home</NavPage>
							</Item>
							<Item as="li">
								<NavPage to={HOT_DEAL}>Hot deal</NavPage>
							</Item>
							<Item as="li">
								<NavPage to={FAVORITES}>Favorites</NavPage>
							</Item>
							<Item as="li">
								<NavPage to={HISTORY}>History</NavPage>
							</Item>
							<Item as="li">
								<NavPage to={CONTACT}>Contact</NavPage>
							</Item>
						</Nav>
					</Collapse>
				</Container>
			</Navigation>
		</>
	);
};

export default ShopNav;

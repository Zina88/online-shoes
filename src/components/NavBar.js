import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { PROFILE, BASKET, ITEMS, HOME, HOT_DEAL, FAVORITES, HISTORY, CONTACT } from 'utils/consts';

const NavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-lang" />
					<Navbar.Collapse id="responsive-navbar-lang">
						<NavDropdown className="me-2" title="EN">
							<NavDropdown.Item href="#action1">EN</NavDropdown.Item>
							<NavDropdown.Item href="#action2">UA</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title="USD">
							<NavDropdown.Item href="#action1">USD</NavDropdown.Item>
							<NavDropdown.Item href="#action2">UAH</NavDropdown.Item>
						</NavDropdown>
						<hr expand="lg" />

						<Nav className="ms-auto">
							<NavLink className="me-2" to={PROFILE}>
								my profile
							</NavLink>
							<NavLink className="me-2" to={BASKET}>
								basket
							</NavLink>
							<NavLink className="me-2" to={ITEMS}>
								items
							</NavLink>
						</Nav>
						<hr expand="lg" />
						<div>$0.00</div>
						<div>🔍</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<hr className="m-0" />
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Container>
					<Navbar.Brand className="text-success">StarShoes</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<NavLink className="me-2" to={HOME}>
								Home
							</NavLink>
							<NavLink className="me-2" to={HOT_DEAL}>
								Hot deal
							</NavLink>
							<NavLink className="me-2" to={FAVORITES}>
								Favotites
							</NavLink>
							<NavLink className="me-2" to={HISTORY}>
								History
							</NavLink>
							<NavLink to={CONTACT}>Contact</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<hr className="m-0" />
		</>
	);
};

export default NavBar;

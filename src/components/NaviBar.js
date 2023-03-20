import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export function NaviBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-lang" />
					<Navbar.Collapse id="responsive-navbar-lang">
						<NavDropdown className='me-2' title="EN">
							<NavDropdown.Item href="#action1">
								EN
							</NavDropdown.Item>
							<NavDropdown.Item href="#action2">UA</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title="USD">
							<NavDropdown.Item href="#action1">USD</NavDropdown.Item>
							<NavDropdown.Item href="#action2">UAH</NavDropdown.Item>
						</NavDropdown>
						<hr expand="lg" />

						<Nav className="ms-auto">
							<Nav.Link href="/user">my profile</Nav.Link>
							<Nav.Link href="/basket">basket</Nav.Link>
							<Nav.Link href="/items">items</Nav.Link>
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
							<Nav.Link href="/">HOME</Nav.Link>
							<Nav.Link href="/bags">BAGS</Nav.Link>
							<Nav.Link href="/sneakers">SNEAKERS</Nav.Link>
							<Nav.Link href="/belt">BELT</Nav.Link>
							<Nav.Link href="/contact">CONTACT</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<hr className="m-0" />
		</>
	);
}

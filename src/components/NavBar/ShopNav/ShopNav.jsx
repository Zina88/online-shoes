import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HOME, HOT_DEAL, FAVORITES, HISTORY, CONTACT } from 'utils/consts';
import logo from 'assets/img/logo.png';
import { NavLogo, LogoImg, NavPage } from './ShopNav.styled.jsx';

const ShopNav = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="light" style={{ padding: 0 }}>
				<Container>
					<Navbar.Brand>
						<NavLogo to={HOME}>
							<LogoImg 
							 src={logo} alt={logo} width="50" />
							Shoes
						</NavLogo>
                    </Navbar.Brand>
                    
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<NavPage 
							// className={css.nav}
							 to={HOME}>
								Home
							</NavPage>
							<NavPage 
							// className={css.nav}
							 to={HOT_DEAL}>
								Hot deal
							</NavPage>
							<NavPage 
							// className={css.nav}
							 to={FAVORITES}>
								Favorites
							</NavPage>
							<NavPage 
							// className={css.nav}
							 to={HISTORY}>
								History
							</NavPage>
							<NavPage 
							// className={css.nav}
							 to={CONTACT}>
								Contact
							</NavPage>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default ShopNav;

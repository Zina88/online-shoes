import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const Navigation = styled(Navbar)`
	height: 97px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavLogo = styled(NavLink)`
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: ${p => p.theme.fontSizes.l};
	line-height: ${p => p.theme.lineHeights.heading};

	color: ${p => p.theme.colors.info};
	display: flex;
	justify-content: center;
	align-items: center;

	transition: color 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		color: ${p => p.theme.colors.success};
	}
}
`;

export const LogoImg = styled.img`
	margin-right: 5px;
	width: 60px;
`;

export const NavBtn = styled(Navbar.Toggle)`
	margin: 28px 0;

	&:focus,
	&:hover {
		border: 2px solid ${p => p.theme.colors.success};
		box-shadow: none;
	}
`;

export const Collapse = styled(Navbar.Collapse)`
	@media (max-width: 1199px) {
		background-color: ${p => p.theme.colors.navbackground};
		box-shadow: ${p => p.theme.boxShadow.primary};
		border-radius: 15px;
		padding: 20px;
		text-align: end;
	}
`;

export const Item = styled(Nav.Link)`
	@media (max-width: 1199px) {
		margin-bottom: 40px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	@media (min-width: 1200px) {
		margin-right: 30px;

		&:last-child {
			margin-right: 0;
		}
	}
`;

export const NavPage = styled(NavLink)`
	text-transform: uppercase;
	font-size: 30px;
	font-weight: ${p => p.theme.fontWeights.medium};
	margin-right: 0;
	color: ${p => p.theme.colors.primary};
	cursor: pointer;
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	line-height: ${p => p.theme.lineHeights.body};
	transition: color 300ms ${p => p.theme.transition.primary};

	@media (min-width: 768px) {
		font-size: 32px;
	}

	@media (min-width: 1200px) {
		font-size: 24px;
	}

	&:hover,
	&:focus {
		color: #40bfff;
	}

	&.active {
		color: ${p => p.theme.colors.success};
		border-radius: 10px;
	}
`;

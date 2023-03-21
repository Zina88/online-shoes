import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLogo = styled(NavLink)`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 27px;

	color: #33a0ff;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		color: #40bfff;
	}
}
`;

export const LogoImg = styled.img`
	margin-right: 5px;
	width: 60px;
`;

export const NavPage = styled(NavLink)`
	cursor: pointer;
	margin-right: 80px;
	text-transform: uppercase;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	line-height: 1.5;
	color: #262626;
	transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
	font-size: 24px;


	&:last-child {
		margin-right: 0;
	}

	&:hover,
	&:focus,
	&:active {
		color: #40bfff;
	}
`;

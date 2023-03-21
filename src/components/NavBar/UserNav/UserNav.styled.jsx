import styled from 'styled-components';
import { Navbar, NavDropdown, Button, InputGroup, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export const Navigation = styled(Navbar)`	
	border-bottom: 2px solid #fafafb;
	padding-top: 26px;
	padding-bottom: 18px;
	position: relative;
	height: 70px;
	`

export const Collapse = styled(Navbar.Collapse)`
    @media (max-width: 767px) {
		margin-top: 3px;
		height: calc(100vh - 130px);
		background-color: ${p => p.theme.colors.light};
    }
`

export const DropdownWrapper = styled.div`  
	@media (max-width: 767px) {
		padding: 15px;
		font-size: 36px;
		display: flex;
		justify-content: start;
		border-bottom: 1px solid #fafafb;
  }

    	@media (min-width: 768px) {
			display: flex;
		}
`;

export const Dropdown = styled(NavDropdown)`
	@media (max-width: 767px) {
		font-size: 24px;
		margin-right: 20px;
  	}

  	@media (min-width: 768px) {
		margin-right: 13px;
		font-family: ${p => p.theme.fonts.raleway};
		font-style: normal;
		font-weight: ${p => p.theme.fontWeights.normal};
		font-size: 16px;
		line-height: ${p => p.theme.lineHeights.heading};
		color: ${p => p.theme.colors.primary};
  	}

	&:last-child {
		margin-right: 0;
	}
`
export const NavAuth = styled.div`
  @media (max-width: 767px) {
	padding: 15px;
	display: block;
	align-items: center;
  }

	display: flex;
	margin-left: auto;
	align-items: center;
`


export const Navlink = styled(NavLink)`
  @media (max-width: 767px) {
		font-size: 38px;
		margin-right: 0;
		margin-bottom: 70px;
		color: inherit;
  }

    @media (min-width: 768px) {
		margin-right: 32px;
		font-family: ${p => p.theme.fonts.raleway};
		font-style: normal;
		font-weight: ${p => p.theme.fontWeights.normal};
		font-size: 20px;
		line-height: ${p => p.theme.lineHeights.heading};
		color: ${p => p.theme.colors.secondary};
		transition: color 300ms ${p => p.theme.transition.primary}, fill 	300ms ${p => p.theme.transition.primary};
  }


	&:hover,
	&:focus {
		color:  ${p => p.theme.colors.success};
		fill:  ${p => p.theme.colors.success};
	}
`

export const SearchButton = styled(Button)`
	border: none;
	transition: fill 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus,
	&:active {
		fill: ${p => p.theme.colors.success};
	}
`

export const InputSearch = styled(InputGroup)`
	margin-left: auto;
	width: 500px;
`

export const Input = styled(Form.Control)`
	color: ${p => p.theme.colors.dark};
	border: 1px solid ${p => p.theme.colors.success};		
	outline: none;
	transition: 
		border 300ms ${p => p.theme.transition.primary}, 			
		box-shadow 300ms ${p => p.theme.transition.primary},
		color 300ms ${p => p.theme.transition.primary};

	&::placeholder{ 
		color: ${p => p.theme.colors.light};
	}

	&:hover,
	&:focus, 
	&:active {
		border: 1px solid ${p => p.theme.colors.dark};
		box-shadow: none;
		color: ${p => p.theme.colors.success};
	}
`

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
`


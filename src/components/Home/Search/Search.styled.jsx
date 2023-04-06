import styled from 'styled-components';
import { InputGroup, Form, Button } from 'react-bootstrap';

export const InputSearch = styled(InputGroup)`
	margin: 0 auto;
	height: 44px;
	width: 280px;

	@media (min-width: 576px) {
		width: 320px;
	}

	@media (min-width: 768px) {
		width: 460px;
	}

	@media (min-width: 1200px) {
		width: 635px;
		height: 64px;
	}
`;

export const Input = styled(Form.Control)`
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.secondary};
	opacity: 0.35;

	border: 1px solid ${p => p.theme.colors.success};
	outline: none;
	transition: border 300ms ${p => p.theme.transition.primary},
		box-shadow 300ms ${p => p.theme.transition.primary},
		color 300ms ${p => p.theme.transition.primary}, opacity 300ms ${p => p.theme.transition.primary};

	&::placeholder {
		color: ${p => p.theme.colors.light};
	}

	&:hover,
	&:focus,
	&:active {
		border: 1px solid ${p => p.theme.colors.success};
		box-shadow: none;
		color: ${p => p.theme.colors.success};
		opacity: 1;
	}

	@media (min-width: 768px) {
	}

	@media (min-width: 1200px) {
		font-size: 18px;
	}
`;

export const SearchInputBtn = styled(Button)`
	height: 44px;
	width: 80px;

	fill: ${p => p.theme.colors.dark};
	background-color: ${p => p.theme.colors.success};
	border: transparent;

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
		width: 90px;
	}

	@media (min-width: 768px) {
		width: 100px;
	}

	@media (min-width: 1200px) {
		width: 127px;
		height: 64px;
		font-size: 20px;
	}
`;

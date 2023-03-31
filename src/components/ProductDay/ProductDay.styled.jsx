import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const Section = styled.section`
	background-color: ${p => p.theme.colors.success};
	padding: 30px 0;

	@media (min-width: 576px) {
		padding: 50px 0;
	}

	@media (min-width: 768px) {
		padding: 70px 0;
	}

	@media (min-width: 1200px) {
		padding: 100px 0;
	}
`;

export const Wrapper = styled(Container)`
	display: flex;
	position: relative;
`;

export const ProductTitle = styled.h2`
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 24px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};
	margin-bottom: 10px;

	@media (min-width: 576px) {
		font-size: 32px;
	}

	@media (min-width: 768px) {
		font-size: 38px;
		margin-bottom: 16px;
	}

	@media (min-width: 1200px) {
		font-size: 55px;
		margin-bottom: 23px;
	}
`;

export const ProductDescription = styled.p`
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};
	margin-bottom: 8px;

	@media (min-width: 576px) {
		font-size: 14px;
	}

	@media (min-width: 768px) {
		font-size: 16px;
		margin-bottom: 12px;
	}

	@media (min-width: 1200px) {
		font-size: 24px;
		margin-bottom: 12px;
	}
`;

export const ProductButtom = styled.button`
	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};
	background-color: transparent;
	border: none;
	text-transform: uppercase;
	transition: color 300ms ${p => p.theme.transition.primary},
		background-color 300ms ${p => p.theme.transition.primary};
	position: relative;
	padding: 0;

	&::after {
		display: block;
		position: absolute;
		content: '';
		width: 100%;
		background-color: currentColor;
		height: 2px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	&:hover,
	&:focus {
		color: ${p => p.theme.colors.info};
		background-color: inherit;
	}

	@media (min-width: 576px) {
		font-size: 14px;
		&::after {
			height: 2px;
			width: 100%;
		}
	}

	@media (min-width: 768px) {
		font-size: 16px;
	}

	@media (min-width: 1200px) {
		font-size: 20px;
		&::after {
			height: 3px;
		}
	}
`;

export const Img = styled.img`
	position: absolute;
	display: none;

	@media (min-width: 576px) {
		display: block;
		width: 239px;
		height: 170px;
		top: 0;
		right: 0;
	}

	@media (min-width: 768px) {
		width: 400px;
		height: 300px;
		top: -85px;
		right: 0;
	}

	@media (min-width: 992px) {
		width: 530px;
		height: 400px;
		top: -125px;
		right: 0;
	}

	@media (min-width: 1200px) {
		width: 795px;
		height: 599px;
		top: -180px;
		right: -80px;
	}
`;

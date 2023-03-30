import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const CardProduct = styled.div`
	width: 100%;
	height: 100%;
`;

export const ProductDetails = styled.div`
	position: absolute;
	display: flex;
	top: 3px;
	left: 3px;
	align-items: center;
	@media (min-width: 767.99px) {
		left: 30px;
	}

	@media (min-width: 992px) {
		top: 15px;
		left: 50px;
	}
`;
export const Title = styled(Card.Title)`
	font-size: 10px;
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: #223263;
	@media (min-width: 767.99px) {
		font-size: 15px;
	}
	@media (min-width: 992px) {
		font-size: 16px;
	}
	@media (min-width: 1199px) {
		font-size: 20px;
	}
`;
export const DetailsBuutom = styled.div`
	position: absolute;
	bottom: 3px;
	left: 3px;
	font-size: 7px;
	display: flex;
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: ${p => p.theme.colors.warning};
	@media (min-width: 767.99px) {
		font-size: 10px;
		left: 30px;
	}
	@media (min-width: 769px) {
		font-size: 12px;
	}

	@media (min-width: 1200px) {
		font-size: 18px;
		left: 50px;
	}
	.oldPrise {
		font-weight: ${p => p.theme.fontWeights.normal};
		font-size: 5px;
		text-decoration-line: line-through;
		color: #9098b1;
		margin-right: 10px;
		@media (min-width: 767.99px) {
			font-size: 10px;
		}

		@media (min-width: 1200px) {
			font-size: 18px;
		}
	}
	.prise {
		font-family: ${p => p.theme.fonts.raleway};
		font-weight: ${p => p.theme.fontWeights.bold};
		font-size: 10px;
		margin-left: 5px;

		line-height: ${p => p.theme.lineHeights.heading};
		letter-spacing: 0.5px;
		color: ${p => p.theme.colors.success};
		@media (min-width: 767.99px) {
			font-size: 18px;
			margin-left: 15px;
		}

		@media (min-width: 1200px) {
			font-size: 24px;
			margin-left: 40px;
		}
	}
`;

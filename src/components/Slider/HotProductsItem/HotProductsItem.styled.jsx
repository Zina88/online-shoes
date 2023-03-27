import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

export const CardProduct = styled(ListGroup.Item)`
	position: relative;
	padding: 0;
	border: 0;
	border-radius: 5px;
	margin-bottom: 10px;
	max-width: 408px;
	max-height: 358px;
	&:last-child {
		margin-bottom: 0;
	}

	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;
export const ProductDetails = styled.div`
	position: absolute;
	display: flex;
	top: 10px;
	left: 30px;

	align-items: center;

	@media (min-width: 992px) {
		top: 20px;
		left: 50px;
		min-width: 200px;
	}
`;
export const Title = styled(Card.Title)`
	font-size: 15px;
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};

	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: #223263;
	@media (min-width: 992px) {
		font-size: 20px;
	}
`;
export const DetailsBuutom = styled.div`
	position: absolute;
	bottom: 10px;
	left: 30px;
	font-size: 12px;

	display: flex;
	/* gap: 8px; */
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};

	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: ${p => p.theme.colors.warning};
	@media (max-width: 1199px) {
		font-size: 12px;
	}
	@media (min-width: 1200px) {
		font-size: 18px;
		left: 50px;
	}
	.oldPrise {
		font-weight: ${p => p.theme.fontWeights.normal};
		font-size: 10px;
		text-decoration-line: line-through;
		color: #9098b1;
		margin-right: 10px;
		@media (max-width: 1199px) {
			font-size: 12px;
		}
		@media (min-width: 1200px) {
			font-size: 18px;
		}
	}
	.prise {
		font-family: ${p => p.theme.fonts.raleway};
		font-weight: ${p => p.theme.fontWeights.bold};
		font-size: 15px;
		margin-left: 15px;

		line-height: ${p => p.theme.lineHeights.heading};
		letter-spacing: 0.5px;
		color: ${p => p.theme.colors.success};

		@media (max-width: 1199px) {
			font-size: 18px;
		}
		@media (min-width: 1200px) {
			font-size: 24px;
			margin-left: 40px;
		}
	}
`;

import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const CardProduct = styled(Card)`
	position: relative;
	width: 435px;
	height: 354px;
	border: 0;
`;
export const ProductDetails = styled.div`
	position: absolute;
	display: flex;
	top: 25px;
	left: 50px;
	align-items: center;

	.title {
		font-family: ${p => p.theme.fonts.body};
		font-weight: ${p => p.theme.fontWeights.bold};
		font-size: 20px;
		line-height: ${p => p.theme.lineHeights.body};
		letter-spacing: 0.5px;
		color: #223263;
		margin-right: 55px;
	}
	.prise {
		font-family: ${p => p.theme.fonts.raleway};
		font-weight: ${p => p.theme.fontWeights.bold};
		font-size: 30px;
		line-height: ${p => p.theme.lineHeights.heading};
		letter-spacing: 0.5px;
		color: ${p => p.theme.colors.success};
	}
`;
export const DetailsBuutom = styled.div`
	position: absolute;
	bottom: 10px;
	left: 145px;
	display: flex;
	gap: 8px;
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: 18px;
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: ${p => p.theme.colors.warning};
	.oldPrise {
		font-weight: ${p => p.theme.fontWeights.normal};
		font-size: 18px;
		text-decoration-line: line-through;
		color: #9098b1;
	}
`;

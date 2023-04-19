import styled from 'styled-components';
export const Wrapper = styled.div``;
export const CartProduct = styled.div`
	display: flex;
`;
export const ImgProduct = styled.img`
	margin-right: 55px;
`;
export const Heading = styled.h2`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.medium};
	line-height: ${p => p.theme.lineHeights.body};
	font-size: 24px;
	text-transform: capitalize;
	color: ${p => p.theme.colors.primary};
	margin-bottom: 22px;
`;
export const InfoWrapper = styled.div`
	border-top: 2px solid #f6f7f8;
	border-bottom: 2px solid #f6f7f8;
	margin-top: 20px;
	margin-bottom: 20px;
`;
export const PriseWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 17px;
	.prise {
		font-family: ${p => p.theme.fonts.body};
		font-style: normal;
		font-weight: ${p => p.theme.fontWeights.bold};
		line-height: ${p => p.theme.lineHeights.price};
		letter-spacing: 0.5px;
		color: ${p => p.theme.colors.success};
		font-size: 20px;

		margin-right: 9px;
	}
	.oldPrise {
		font-weight: ${p => p.theme.fontWeights.normal};
		font-size: 14px;
		text-decoration-line: line-through;
		color: #9098b1;
		margin-right: 9px;
	}
	.discount {
		font-family: ${p => p.theme.fonts.body};
		font-weight: ${p => p.theme.fontWeights.bold};
		font-style: 14px;
		line-height: ${p => p.theme.lineHeights.body};
		letter-spacing: 0.5px;
		color: ${p => p.theme.colors.warning};
	}
`;
export const ListInfo = styled.ul`
	.itemInfo {
		display: flex;
		margin-bottom: 16px;
		text-transform: capitalize;
		font-family: ${p => p.theme.fonts.body};
		font-weight: ${p => p.theme.fontWeights.normal};
		font-style: 14px;
		line-height: ${p => p.theme.lineHeights.body};
		color: ${p => p.theme.colors.secondary};
		&:last-child {
			margin-bottom: 0;
		}
	}
	.text {
		margin-right: 70px;
	}
`;

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

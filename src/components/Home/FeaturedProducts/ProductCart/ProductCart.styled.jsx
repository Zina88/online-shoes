import styled from 'styled-components';
export const GalleryItem = styled.div`
	display: flex;
	justify-content: flex-start;
`;
export const CardWrapper = styled.div`
	border-radius: 5px;
	background-size: cover;
	box-shadow: ${p => p.theme.boxShadow.primary};
	margin-right: 15px;
	transition: box-shadow 1000ms ${p => p.theme.transition.primary},
		scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover,
	&:focus {
		box-shadow: ${p => p.theme.boxShadow.hover};
		scale: 1.2;
	}
`;
export const CardImg = styled.img`
	border-radius: 5px;
	width: 100%;
	height: 100%;
`;

export const CardDescription = styled.div``;
export const CardName = styled.h3`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.primary};
	margin-bottom: 16px;
	@media (min-width: 1200px) {
		font-size: 22px;
	}
`;
export const StarWrapper = styled.div`
	margin-bottom: 16px;
`;
export const PriceWrapper = styled.div``;
export const Price = styled.span`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 12px;
	margin-right: 5px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.danger};
	@media (min-width: 998px) {
		font-size: 14px;
	}
	@media (min-width: 1200px) {
		font-size: 20px;
	}
`;
export const OldPrice = styled.span`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.heading};
	text-decoration-line: line-through;
	color: #c1c8ce;
	@media (min-width: 998px) {
		font-size: 14px;
	}
	@media (min-width: 1200px) {
		font-size: 20px;
	}
`;

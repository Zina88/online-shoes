import styled from 'styled-components';
export const GalleryItem = styled.div`
	display: flex;
	gap: 15px;
	justify-content: flex-start;
`;
export const CardWrapper = styled.div`
	border-radius: 5px;
	box-shadow: ${p => p.theme.boxShadow.primary};
	transition: box-shadow 1000ms ${p => p.theme.transition.primary},
		scale 1000ms ${p => p.theme.transition.primary};
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

export const CardName = styled.h3`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 16px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.primary};
	margin-bottom: 9px;
	@media (min-width: 576px) {
		font-size: 12px;
		margin-bottom: 5px;
	}
	@media (min-width: 998px) {
		font-size: 16px;
	}
	@media (min-width: 1200px) {
		font-size: 22px;
	}
`;
export const StarWrapper = styled.div`
	margin-bottom: 9px;
	@media (min-width: 576px) {
		margin-bottom: 5px;
	}
`;

export const Price = styled.span`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 14px;
	margin-right: 5px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.danger};
	@media (min-width: 576px) {
		font-size: 10px;
	}

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
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.heading};
	text-decoration-line: line-through;
	color: #c1c8ce;
	@media (min-width: 576px) {
		font-size: 10px;
	}
	@media (min-width: 998px) {
		font-size: 14px;
	}
	@media (min-width: 1200px) {
		font-size: 20px;
	}
`;

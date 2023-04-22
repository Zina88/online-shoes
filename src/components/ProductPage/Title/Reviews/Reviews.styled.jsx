import styled from 'styled-components';
export const StarWrapper = styled.div`
	display: flex;
	gap: 16px;
`;
export const Quantity = styled.p`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	line-height: ${p => p.theme.lineHeights.price};
	font-style: normal;
	font-size: 16px;
	color: #c1c8ce;
`;
export const Submit = styled.button`
	border: none;
	background-color: transparent;
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 16px;
	line-height: ${p => p.theme.lineHeights.price};
	color: ${p => p.theme.colors.info};

	transition: color 300ms ${p => p.theme.transition.primary},
		background-color 300ms ${p => p.theme.transition.primary};
	&:hover,
	&:focus {
		color: ${p => p.theme.colors.success};
		background-color: inherit;
	}
`;

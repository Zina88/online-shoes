import styled from 'styled-components';

export const Title = styled.h2`
	text-transform: uppercase;
	text-align: center;
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 20px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.primary};
	margin-bottom: 10px;

	@media (min-width: 768px) {
		font-size: 28px;
		margin-bottom: 16px;
	}

	@media (min-width: 768px) {
		font-size: 35px;
		margin-bottom: 25px;
	}
`;

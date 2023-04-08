import styled from 'styled-components';
export const Box = styled.div`
	border-top: 1px solid #f6f7f8;
	margin-top: 60px;
`;
export const Text = styled.div`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: #c1c8ce;
	text-align: center;
	padding: 16px 20px;
	.link {
		color: #c1c8ce;
		margin-left: 3px;
		margin-right: 3px;
	}
	@media (min-width: 768px) {
		font-size: 14px;
	} ;
`;

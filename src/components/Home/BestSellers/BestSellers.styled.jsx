import styled from 'styled-components';

export const Wrapper = styled.section`
	text-align: center;

	@media (min-width: 1200px) {
		padding-bottom: 0;
	}
`;

export const LoadMoreBtn = styled.button`
	border: none;
	background-color: transparent;
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.info};
	text-transform: uppercase;

	&::after {
		display: block;
		position: relative;
		content: '';
		width: 100%;
		background-color: ${p => p.theme.colors.info};
		height: 3px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (min-width: 576px) {
		font-size: 20px;
	}
`;

export const EmptyWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 0;
	min-height: 430px;
`;

export const EmptyImg = styled.img`
	width: 200px;
	height: 220px;
`;

export const EmptyText = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 36px;
	padding: 30px 0;
	color: ${p => p.theme.colors.dark};
`;

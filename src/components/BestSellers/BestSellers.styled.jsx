import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 30px 0 30px 0;
	text-align: center;

	@media (min-width: 768px) {
		padding: 50px 0 70px 0;
	}

	@media (min-width: 1200px) {
		padding: 62px 0 90px 0;
	}
`;

export const BestSellerTitle = styled.h2`
	text-transform: uppercase;
	text-align: center;
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 35px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.primary};

	margin-bottom: 24px;
`;

export const LoadMoreBtn = styled.button`
	border: none;
	background-color: transparent;
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.info};

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
	padding: 40px 0;
	min-height: 405px;
`;

export const EmptyImg = styled.img`
	width: 150px;
	height: 100%;
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

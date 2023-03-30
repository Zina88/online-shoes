import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const Wrapper = styled(Container)`
	padding: 62px 15px;
	text-align: center;
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

	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	/* identical to box height */

	color: #33a0ff;

	&::after {
		display: block;
		position: relative;
		content: '';
		width: 100%;
		background-color: #33a0ff;
		height: 3px;
		bottom: 0;
		left: 50%;

		transform: translateX(-50%);
	}
`;

export const EmptyWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 30px 0;
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

	color: #385c8e;
`;

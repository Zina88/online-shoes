import styled from 'styled-components';
import { ReactComponent as Heart } from 'assets/icons/hearts.svg';
import { ReactComponent as Cart } from 'assets/icons/cartIcon.svg';

export const GalleryItem = styled.div`
	box-shadow: ${p => p.theme.boxShadow.primary};
	border-radius: 5px;
	transition: box-shadow 1000ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		box-shadow: ${p => p.theme.boxShadow.hover};
	}
`;

export const CardWrapper = styled.div`
	position: relative;
`;

export const CardImg = styled.img`
	width: 100%;
	height: 100%;
`;

export const HoverWrapper = styled.div`
	opacity: 0;
	background-color: #fff;
	min-width: Calc(100% - 20px);
	min-height: Calc(100% - 20px);
	position: absolute;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 1000ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		transition: 2s;
		opacity: 1;
	}
`;

export const HeartIcon = styled(Heart)`
	fill: ${p => p.theme.colors.success};
	width: 50px;
	height: 50px;
	padding: 16px;
	border: 2px solid #33a0ff25;
	border-radius: 50%;
	margin-right: 11px;
	transition: fill 300ms ${p => p.theme.transition.primary},
		border-color 300ms ${p => p.theme.transition.primary};
		border-width 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus, 
	&.active {
		fill: ${p => p.theme.colors.dark};
		border-color: ${p => p.theme.colors.dark};
		border-width: 0.5px;
	}
`;

export const CartIcon = styled(Cart)`
	fill: ${p => p.theme.colors.success};
	width: 50px;
	height: 50px;
	padding: 16px;
	border: 2px solid #33a0ff25;
	border-radius: 50%;
	transition: fill 300ms ${p => p.theme.transition.primary},
		border-color 300ms ${p => p.theme.transition.primary},
		border-width 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		fill: ${p => p.theme.colors.dark};
		border-color: ${p => p.theme.colors.dark};
		border-width: 0.5px;
	}
`;

export const CardDescription = styled.div`
	padding: 14px;
	text-align: center;
`;

export const CardName = styled.h3`
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: 18px;
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: ${p => p.theme.colors.darkText};
	text-transform: capitalize;
	margin-bottom: 6px;
`;

export const StarWrapper = styled.div`
	margin-bottom: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PriceWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
`;

export const Price = styled.div`
	font-size: 12px;

	@media (min-width: 768px) {
		font-size: 14px;
	}
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.bold};

	line-height: ${p => p.theme.lineHeights.price};
	letter-spacing: 0.5px;
	color: ${p => p.theme.colors.success};
`;

export const OldPrice = styled.div`
	margin-right: 3px;
	margin-left: 5px;
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	text-decoration-line: line-through;
	color: ${p => p.theme.colors.natureGrey};
`;

export const Discount = styled.div`
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;
	color: ${p => p.theme.colors.warning};
`;

import styled from 'styled-components';
import { NavLogo, LogoImg } from '../NavBar/ShopNav/ShopNav.styled';

export const Wrapper = styled.footer`
	background: ${p => p.theme.colors.light};
	padding-top: 60px;

	position: absolute;
	bottom: 0;
	width: 100%;

	height: 506px;

	@media (min-width: 372px) {
		height: 420px;
	}

	@media (min-width: 475px) {
		height: 394px;
	}

	@media (min-width: 768px) {
		height: 405px;
	}

	@media (min-width: 994px) {
		height: 383px;
	}
`;

export const LogoFooter = styled(NavLogo)`
	justify-content: flex-start;
`;

export const LogoImgFooter = styled(LogoImg)``;
export const Address = styled.address`
	margin: 0;
	.item {
		margin-bottom: 5px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;
export const LinkAddress = styled.a`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.primary};
	cursor: pointer;
	transition: color 300ms ${p => p.theme.transition.primary};

	&:hover,
	&:focus {
		color: ${p => p.theme.colors.info};
	}
`;
export const Title = styled.h3`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.primary};
	margin-bottom: 10px;
	@media (min-width: 768px) {
		font-size: 18px;
	} ;
`;
export const TextFooter = styled.p`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 10px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.primary};
	@media (min-width: 768px) {
		font-size: 12px;
	} ;
`;

export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

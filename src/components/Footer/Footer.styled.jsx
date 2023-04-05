import styled from 'styled-components';
import { NavLogo, LogoImg } from '../NavBar/ShopNav/ShopNav.styled';
import { ReactComponent as Twitter } from 'assets/icons/footer/twitter.svg';
import { ReactComponent as Instagram } from 'assets/icons/footer/instagram.svg';
import { ReactComponent as Facebook } from 'assets/icons/footer/facebook.svg';
export const Wrapper = styled.footer`
	background: ${p => p.theme.colors.light};
	padding-top: 154px;
`;
export const Box = styled.div`
	border-top: 1px solid #f6f7f8;
	margin-top: 60px;
`;
export const Text = styled.p`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: #c1c8ce;
	text-align: center;
	padding: 16px 20px;
`;
export const LogoFooter = styled(NavLogo)`
	justify-content: flex-start;
	margin-bottom: 30px;
`;

export const LogoImgFooter = styled(LogoImg)``;
export const Address = styled.address``;
export const Title = styled.h3`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 18px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.primary};
`;
export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
export const TwitterIcon = styled(Twitter)`
	fill: currentColor;
	width: 20px;
	height: 20px;
`;
export const InstagramIcon = styled(Instagram)`
	fill: currentColor;
	width: 20px;
	height: 20px;
`;
export const FacebookIcon = styled(Facebook)`
	fill: currentColor;
	width: 20px;
	height: 20px;
`;
export const Socials = styled.ul`
	display: flex;
	gap: 20px;
`;

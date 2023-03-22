import styled from 'styled-components';
import imageHero from '../../imges/hero/hero_ld.png';
export const HeroSection = styled.section`
	max-width: 1920px;
	padding-top: 260px;
	padding-bottom: 165px;
	padding-left: 104px;
	margin-left: auto;
	margin-right: auto;
	background-image: linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%),
		url('${imageHero}');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 5px;
`;
export const HeroTitle = styled.h1`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: 64px;
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;

	color: ${p => p.theme.colors.background};

	.span {
		display: block;
	}
`;

import styled from 'styled-components';
import imageHero from '../../assets/img/hero/hero_ld.png';
import imageHero2x from '../../assets/img/hero/hero_ld2x.png';
import imageHeroSm from '../../assets/img/hero/hero_sm.png';
import imageHeroSm2x from '../../assets/img/hero/hero_sm2x.png';
export const HeroSection = styled.section`
	padding-top: 32px;
	padding-bottom: 102px;
	margin: 0 auto;

	background-image: linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%),
		url('${imageHeroSm}');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 5px;
	@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
		background-image: linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%),
			url('${imageHeroSm2x}');
	}
	@media (min-width: 768px) {
		padding-top: 260px;
		padding-bottom: 165px;
		background-image: linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%),
			url('${imageHero}');
		@media (min-device-pixel-ratio: 2),
			(-webkit-min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%),
				url('${imageHero2x}');
		}
	}
`;
export const HeroTitle = styled.h1`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: 24px;
	line-height: ${p => p.theme.lineHeights.body};
	letter-spacing: 0.5px;

	color: ${p => p.theme.colors.background};

	.span {
		display: block;
	}
	@media (min-width: 768px) {
		font-size: 64px;
	}
`;

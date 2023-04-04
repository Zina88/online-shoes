import styled from 'styled-components';
import shoes from 'assets/img/productDay/shoes-shoe.png';
import shoes2x from 'assets/img/productDay/shoes-shoe@2x.png';

export const Section = styled.section`
	padding-top: 50px;
	padding-bottom: 50px;

	background-repeat: no-repeat;
	background-image: url(${shoes}),
		linear-gradient(to bottom, ${p => p.theme.colors.success}, ${p => p.theme.colors.success});

	background-size: 250px 180px, 100% 100%;
	background-position: right top 70px, 0 0;

	@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
		background-image: url(${shoes2x}),
			linear-gradient(to bottom, ${p => p.theme.colors.success}, ${p => p.theme.colors.success});
	}

	@media (min-width: 576px) {
		padding-top: 80px;
		padding-bottom: 80px;

		ackground-image: url(${shoes}),
			linear-gradient(to bottom, ${p => p.theme.colors.success}, ${p => p.theme.colors.success});

		background-size: 400px 300px, 100% 100%;
		background-position: right calc(50% - 100px) top 30px, 0 0;

		@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
			background-image: url(${shoes2x}),
				linear-gradient(to bottom, ${p => p.theme.colors.success}, ${p => p.theme.colors.success});
		}
	}

	@media (min-width: 768px) {
		padding-top: 100px;
		padding-bottom: 100px;

		ackground-image: url(${shoes}), linear-gradient(to bottom, ${p => p.theme.colors.success});

		background-size: 530px 400px, 100% 100%;
		background-position: right calc(50% - 140px) top 30px, 0 0;

		@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
			background-image: url(${shoes2x}),
				linear-gradient(to bottom, ${p => p.theme.colors.success}, ${p => p.theme.colors.success});
		}
	}

	@media (min-width: 992px) {
		padding-top: 100px;
		padding-bottom: 100px;

		ackground-image: url(${shoes}),
			linear-gradient(
				to bottom,
				#fff 90px,
				${p => p.theme.colors.success} 90px,
				${p => p.theme.colors.success}
			);

		background-size: 636px 479px, 100% 100%;
		background-position: right calc(50% - 200px) top -15px, 0 0;

		@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
			background-image: url(${shoes2x}),
				linear-gradient(
					to bottom,
					#fff 15px,
					${p => p.theme.colors.success} 15px,
					${p => p.theme.colors.success}
				);
		}
	}

	@media (min-width: 1200px) {
		padding-top: 160px;
		padding-bottom: 160px;

		background-repeat: no-repeat;
		background-image: url(${shoes}),
			linear-gradient(
				to bottom,
				#fff 90px,
				${p => p.theme.colors.success} 90px,
				${p => p.theme.colors.success}
			);

		background-size: 795px 599px, 100% 100%;
		background-position: right calc(50% - 250px) top, 0 0;

		@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
			background-image: url(${shoes2x}),
				linear-gradient(
					to bottom,
					#fff 90px,
					${p => p.theme.colors.success} 90px,
					${p => p.theme.colors.success}
				);
		}
	}
`;

export const ProductTitle = styled.h2`
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 24px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};
	margin-bottom: 10px;

	@media (min-width: 576px) {
		font-size: 32px;
	}

	@media (min-width: 768px) {
		font-size: 38px;
		margin-bottom: 16px;
	}

	@media (min-width: 1200px) {
		font-size: 55px;
		margin-bottom: 23px;
	}
`;

export const ProductDescription = styled.p`
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};
	margin-bottom: 8px;

	@media (min-width: 576px) {
		font-size: 14px;
	}

	@media (min-width: 768px) {
		font-size: 16px;
		margin-bottom: 12px;
	}

	@media (min-width: 1200px) {
		font-size: 24px;
		margin-bottom: 12px;
	}
`;

export const ProductButtom = styled.button`
	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.white};
	background-color: transparent;
	border: none;
	text-transform: uppercase;
	transition: color 300ms ${p => p.theme.transition.primary},
		background-color 300ms ${p => p.theme.transition.primary};
	position: relative;
	padding: 0;

	&::after {
		display: block;
		position: absolute;
		content: '';
		width: 100%;
		background-color: currentColor;
		height: 2px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	&:hover,
	&:focus {
		color: ${p => p.theme.colors.info};
		background-color: inherit;
	}

	@media (min-width: 576px) {
		font-size: 14px;
		&::after {
			height: 2px;
			width: 100%;
		}
	}

	@media (min-width: 768px) {
		font-size: 16px;
	}

	@media (min-width: 1200px) {
		font-size: 20px;
		&::after {
			height: 3px;
		}
	}
`;

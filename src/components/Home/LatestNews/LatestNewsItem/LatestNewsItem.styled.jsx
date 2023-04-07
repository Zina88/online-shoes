import styled from 'styled-components';

export const Wrapper = styled.div``;

export const WrapperImg = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;

	@media (min-width: 576px) {
		height: 100px;
	}

	@media (min-width: 768px) {
		height: 120px;
	}

	@media (min-width: 1200px) {
		height: 140px;
	}
`;

export const Img = styled.img`
	width: 100px;

	@media (min-width: 768px) {
		width: 120px;
	}

	@media (min-width: 1200px) {
		width: 140px;
	}
`;

export const WrapperDescripton = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 576px) {
		height: 190px;
	}

	@media (min-width: 768px) {
		height: 230px;
	}

	@media (min-width: 992px) {
		height: 200px;
	}

	@media (min-width: 1200px) {
		height: 230px;
	}
`;

export const Date = styled.p`
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.body};
	color: #c1c8ce;

	@media (min-width: 1200px) {
		font-size: 18px;
	}
`;

export const Title = styled.h3`
	display: inline-block;
	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 18px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.secondary};

	width: 280px;
	height: 30px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (min-width: 576px) {
		font-size: 18px;
		width: 145px;
	}

	@media (min-width: 768px) {
		font-size: 20px;
		width: 180px;
	}

	@media (min-width: 992px) {
		font-size: 22px;
		width: 280px;
	}

	@media (min-width: 1200px) {
		font-size: 22px;
		width: 220px;
	}
`;

export const Descriprion = styled.p`
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.secondary};

	min-width: 280px;
	height: 65px;
	white-space: wrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (min-width: 576px) {
		font-size: 14px;
		min-width: 145px;
		height: 108px;
	}

	@media (min-width: 768px) {
		font-size: 18px;
		min-width: 170px;
		height: 130px;
	}

	@media (min-width: 992px) {
		min-width: 170px;
		height: 112px;
	}

	@media (min-width: 1200px) {
		min-width: 220px;
		height: 140px;
	}
`;

export const WrapperReadMoreBtn = styled.div`
	display: flex;
	align-items: center;
	margin-top: auto;
`;

export const ReadMoreBtn = styled.a`
	border: none;
	background-color: transparent;
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 12px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.info};
	text-transform: uppercase;
	transition: color 300ms ${p => p.theme.transition.primary},
		background-color 300ms ${p => p.theme.transition.primary};

	&::after {
		display: block;
		position: relative;
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
		color: ${p => p.theme.colors.success};
		background-color: inherit;
	}

	@media (min-width: 576px) {
		font-size: 14px;
	}

	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	@media (min-width: 1200px) {
		display: grid;
		grid-template-columns: repeat(1, 130px 1fr);
	}

	& a {
		width: 540px;
		height: 30px;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: color 300ms ${p => p.theme.transition.primary},
			overflow 300ms ${p => p.theme.transition.primary},
			text-overflow 300ms ${p => p.theme.transition.primary},
			white-space 300ms ${p => p.theme.transition.primary},
			height 300ms ${p => p.theme.transition.primary};

		@media (min-width: 576px) {
			width: 220px;
		}
	}

	&:hover a,
	&:focus a {
		transition: 300ms;
		color: ${p => p.theme.colors.info};

		overflow: inherit;
		text-overflow: inherit;
		white-space: inherit;
		height: auto;
	}
`;

export const WrapperImg = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: center;
	height: 140px;
	padding: 20px 0;
	/* margin-right: 5px; */
`;

export const Img = styled.img`
	width: 100px;
`;

export const WrapperDescripton = styled.div``;

export const Date = styled.p`
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.body};
	color: #c1c8ce;

	@media (min-width: 1200px) {
		font-size: 18px;
	}
`;

export const WrapperTitle = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: start;
	margin-bottom: 5px;
`;

export const Title = styled.a`
	display: inline-block;
	font-weight: ${p => p.theme.fontWeights.SemiBold};
	font-size: 18px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.secondary};

	@media (min-width: 576px) {
		font-size: 20px;
	}

	@media (min-width: 768px) {
		font-size: 22px;
	}
`;

export const Descriprion = styled.p`
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.secondary};

	@media (min-width: 576px) {
		font-size: 15px;
	}

	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

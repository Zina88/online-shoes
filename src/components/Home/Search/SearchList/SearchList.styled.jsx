import styled from 'styled-components';

export const WrapperSearch = styled.div`
	background-color: ${p => p.theme.colors.navbackground};
	width: 100%;
	height: 100%;
	padding: 10px;
	margin-top: 5px;
	border-radius: 5px;
	box-shadow: ${p => p.theme.boxShadow.primary};
`;

export const Search = styled.ul`
	width: 100%;
	height: auto;
	max-height: 260px;
	overflow: hidden;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		background-color: #f1f1f1;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${p => p.theme.colors.success};
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: ${p => p.theme.colors.info};
	}

	@media (min-width: 576px) {
		height: auto;
		max-height: 285px;
	}

	@media (min-width: 768px) {
		height: auto;
		max-height: 350px;
	}

	@media (min-width: 992px) {
		height: auto;
		max-height: 430px;
	}

	@media (min-width: 1200px) {
		height: auto;
		max-height: 480px;
	}
`;

export const SearchItem = styled.li`
	background-color: #fbfcfc;
	border: 1px solid ${p => p.theme.colors.success};
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	padding: 7px;
	margin-bottom: 7px;
	margin-right: 15px;

	&:hover img,
	&:focus img,
	&:hover h3,
	&:focus h3 {
		transition: 1s;
		scale: 1.08;
		color: ${p => p.theme.colors.success};
	}

	&:hover p,
	&:focus p {
		transition: 1s;
		scale: 1.1;
		color: ${p => p.theme.colors.danger};
	}

	@media (min-width: 768px) {
		margin-bottom: 10px;
	}

	@media (min-width: 1200px) {
		margin-right: 20px;
	}
`;

export const SearchImg = styled.img`
	border: 1px solid ${p => p.theme.colors.success};
	border-radius: 5px;
	transition: scale 1s ${p => p.theme.transition.primary};
	margin-right: 10px;

	@media (min-width: 576px) {
		width: 80px;
		margin-right: 15px;
	}

	@media (min-width: 768px) {
		width: 100px;
		margin-right: 15px;
	}

	@media (min-width: 992px) {
		width: 130px;
		margin-right: 25px;
	}

	@media (min-width: 1200px) {
		width: 150px;
		margin-right: 25px;
	}
`;

export const SearchText = styled.h3`
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 14px;
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.primary};
	text-transform: capitalize;
	margin-right: auto;

	transition: scale 2000ms ${p => p.theme.transition.primary},
		color 1s ${p => p.theme.transition.primary};

	@media (min-width: 576px) {
		font-size: 16px;
	}

	@media (min-width: 768px) {
		font-size: 20px;
		font-weight: ${p => p.theme.fontWeights.medium};
	}

	@media (min-width: 992px) {
		font-size: 22px;
	}
`;

export const SearchPrice = styled.p`
	color: ${p => p.theme.colors.warning};
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 16px;
	line-height: ${p => p.theme.lineHeights.heading};
	margin-top: auto;
	margin-right: 15px;

	transition: scale 2000ms ${p => p.theme.transition.primary},
		color 1s ${p => p.theme.transition.danger};

	@media (min-width: 576px) {
		font-size: 18px;
	}

	@media (min-width: 768px) {
		font-size: 20px;
		font-weight: ${p => p.theme.fontWeights.medium};
	}

	@media (min-width: 992px) {
		font-size: 22px;
	}
`;

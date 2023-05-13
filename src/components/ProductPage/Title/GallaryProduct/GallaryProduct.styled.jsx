import styled from 'styled-components';
export const Current = styled.div`
	width: 460px;
	height: 370px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 6px;
	box-shadow: ${p => p.theme.boxShadow.primary};
`;
export const ListImage = styled.ul`
	display: flex;
	margin-top: 50px;
	gap: 20px;
`;
export const Image = styled.div`
	width: 100px;
	height: 75px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 6px;
	cursor: pointer;
	box-shadow: ${p => p.theme.boxShadow.primary};
	transition: box-shadow 1000ms ${p => p.theme.transition.primary};

	&:hover,
	&.active {
		box-shadow: ${p => p.theme.boxShadow.hover};
	}
`;

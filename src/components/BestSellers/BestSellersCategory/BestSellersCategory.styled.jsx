import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const CategoryList = styled.ul`
	margin-bottom: 25px;
	text-align: center;

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
	}
`;

export const CategoryItem = styled.li`
	@media (min-width: 768px) {
		margin-right: 45px;

		&:last-child {
			margin-right: 0;
		}
	}
`;

export const CategoryBtn = styled(NavLink)`
	font-family: ${p => p.theme.fonts.body};
	font-style: normal;
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: 22px;
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.secondary};
	margin-bottom: 15px;
	cursor: pointer;
	transition: color 300ms ${p => p.theme.transition.primary};
	position: relative;

	&:hover,
	&:focus {
		color: ${p => p.theme.colors.info};		
		
		&::after {
		display: block;
		position: absolute;
		content: '';
		width: 100%;
		background-color: ${p => p.theme.colors.info};
		height: 3px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}


	}	&.active {
		color: color: ${p => p.theme.colors.success};
	}

	&:nth(first-child) {
		color: red;
	}
`;

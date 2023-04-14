import styled from 'styled-components';
import { ReactComponent as Twitter } from 'assets/icons/footer/twitter.svg';
import { ReactComponent as Instagram } from 'assets/icons/footer/instagram.svg';
import { ReactComponent as Facebook } from 'assets/icons/footer/facebook.svg';
export const List = styled.ul`
	display: flex;
	gap: 20px;
	margin-top: 5px;
`;
export const TwitterIcon = styled(Twitter)`
	fill: ${p => p.theme.colors.info};

	width: 20px;
	height: 20px;
	transition: fill 300ms ${p => p.theme.transition.primary};
	&:hover,
	&:focus {
		fill: currentColor;
	}
`;
export const InstagramIcon = styled(Instagram)`
	fill: ${p => p.theme.colors.info};

	width: 20px;
	height: 20px;
	transition: fill 300ms ${p => p.theme.transition.primary};
	&:hover,
	&:focus {
		fill: currentColor;
	}
`;
export const FacebookIcon = styled(Facebook)`
	fill: ${p => p.theme.colors.info};

	width: 20px;
	height: 20px;
	transition: fill 300ms ${p => p.theme.transition.primary};
	&:hover,
	&:focus {
		fill: currentColor;
	}
`;

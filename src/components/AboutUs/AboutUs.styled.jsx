import styled from 'styled-components';

import { ReactComponent as Support } from '../../assets/icons/supportIcon.svg';
import { ReactComponent as Refund } from '../../assets/icons/refundIcon.svg';
import { ReactComponent as Shipping } from '../../assets/icons/shippingIcon.svg';

export const Section = styled.section`
	padding: 30px 0 30px 0;
	text-align: center;
	@media (min-width: 768px) {
		padding: 50px 0 50px 0;
	}
	@media (min-width: 1200px) {
		padding: 60px 0 60px 0;
	}
`;

export const Icon = styled.div`
	height: 126px;
`;

export const SupportIcon = styled(Support)``;
export const RefundIcon = styled(Refund)``;
export const ShippingIcon = styled(Shipping)``;
export const Title = styled.h3`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: 20px;
	line-height: 1.48;
	color: ${p => p.theme.colors.primary};
	text-transform: uppercase;
	margin-bottom: 16px;
	@media (min-width: 768px) {
		font-size: 27px;
	}
`;
export const Text = styled.p`
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.normal};
	color: ${p => p.theme.colors.primary};
	font-size: 15px;
	line-height: ${p => p.theme.lineHeights.heading};
	text-align: center;
	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

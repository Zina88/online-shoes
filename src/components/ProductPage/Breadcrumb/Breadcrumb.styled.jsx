import styled from 'styled-components';
import { Breadcrumb } from 'react-bootstrap';
import { theme } from 'utils/themes';

export const BreadcrumbSectionWrapper = styled.div`
	background-color: #f6f7f8;
`;

export const BreadcrumbWrapper = styled(Breadcrumb)`
	margin-bottom: 40px;
	padding: 14px;

	@media (min-width: 576px) {
		display: flex;
		align-items: baseline;
		justify-content: center;
	}
`;

export const LinkBack = styled(Breadcrumb.Item)`
	text-transform: capitalize;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: ${(p => p, theme.lineHeights.heading)};
	margin-right: 8px;

	& a {
		color: ${p => p.theme.colors.info};
	}

	&:nth-child(2) {
		color: #c1c8ce;
	}

	&:nth-child(2) a {
		margin-left: 8px;
	}

	@media (min-width: 576px) {
		font-size: 18px;
	}
`;

export const WrapperNameLink = styled(Breadcrumb.Item)`
	display: flex;

	&::before {
		margin-right: 8px;
	}

	&.active {
		color: #c1c8ce;
	}
`;

export const LinkName = styled.h3`
	text-transform: capitalize;
	font-size: 16px;
	font-weight: 400;
	line-height: ${p => p.theme.lineHeights.heading};
	margin-left: 2px;
	color: ${p => p.theme.colors.secondary};

	@media (min-width: 576px) {
		font-size: 18px;
	}
`;

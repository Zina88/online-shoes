import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import {
	BreadcrumbSectionWrapper,
	BreadcrumbWrapper,
	LinkBack,
	LinkName,
} from './Breadcrumb.styled';
import { Container } from 'react-bootstrap';

const BreadcrumbSection = ({ product }) => {
	let location = useLocation();
	const nav = location.state.from;
	const nameLink = nav.pathname.substring(1);
	const nameProduct = product.map(n => n.name);

	return (
		<BreadcrumbSectionWrapper>
			<Container>
				<BreadcrumbWrapper as="nav">
					<LinkBack linkAs={Link} linkProps={{ to: nav }}>
						{nameLink.length === 0 ? 'Home' : nameLink}
					</LinkBack>

					<Breadcrumb.Item as="li" active style={{ display: 'flex' }}>
						<LinkName>{nameProduct}</LinkName>
					</Breadcrumb.Item>
				</BreadcrumbWrapper>{' '}
			</Container>
		</BreadcrumbSectionWrapper>
	);
};

export default BreadcrumbSection;

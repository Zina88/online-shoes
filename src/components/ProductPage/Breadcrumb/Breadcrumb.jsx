import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import {
	BreadcrumbSectionWrapper,
	BreadcrumbWrapper,
	LinkBack,
	LinkName,
} from './Breadcrumb.styled';
import { HOME } from 'utils/consts';

const BreadcrumbSection = ({ product }) => {
	let location = useLocation();
	const nav = location.state.from;
	const nameLink = nav.pathname.substring(1);
	const nameProduct = product.map(n => n.name);

	return (
		<BreadcrumbSectionWrapper>
			<Container>
				<BreadcrumbWrapper as="nav">
					{nameLink.length === 0 ? (
						<LinkBack linkAs={Link} linkProps={{ to: nav }}>
							Home
						</LinkBack>
					) : (
						<>
							<LinkBack linkAs={Link} linkProps={{ to: HOME }}>
								Home
							</LinkBack>
							<LinkBack linkAs={Link} linkProps={{ to: nav }}>
								{nameLink}
							</LinkBack>
						</>
					)}

					<Breadcrumb.Item as="li" active style={{ display: 'flex' }}>
						<LinkName>{nameProduct}</LinkName>
					</Breadcrumb.Item>
				</BreadcrumbWrapper>{' '}
			</Container>
		</BreadcrumbSectionWrapper>
	);
};

export default BreadcrumbSection;

BreadcrumbSection.propTypes = {
	product: PropTypes.array,
};

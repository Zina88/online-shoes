import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './HotDeal.styled';
import { Row, Col } from 'react-bootstrap';
import HotDealGalleryItem from 'components/HotDeal/HotDealGalleryItem';
import SectionTitle from 'components/shared/SectionTitle';

const HotDeal = ({ hotGallery }) => {
	return (
		<Wrapper>
			<SectionTitle text="Hot Deal" />

			<Row as="ul" xs={2} md={3} xl={4} className={'mb-3 p-2'}>
				{hotGallery.map(item => (
					<Col as="li" className={'p-2'} key={item.id}>
						<HotDealGalleryItem gallery={item} />
					</Col>
				))}
			</Row>
		</Wrapper>
	);
};

export default HotDeal;

HotDeal.propTypes = {
	hotGallery: PropTypes.array,
};

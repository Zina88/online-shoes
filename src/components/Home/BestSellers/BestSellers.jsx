import React, { useState } from 'react';
import BestSellersCategory from './BestSellersCategory';
import BestSellersGalleryItem from './BestSellersGalleryItem';
import SectionTitle from 'components/shared/SectionTitle';
import { Wrapper, LoadMoreBtn, EmptyWrapper, EmptyText, EmptyImg } from './BestSellers.styled';
import { Row, Col, Container } from 'react-bootstrap';
import gallery from 'gallery.json';
import empty from 'assets/img/empty.png';

const BestSellers = () => {
	const [current, setCurrent] = useState(gallery.slice(0, 8));

	const chooseCategory = category => {
		if (category === 'all') {
			return setCurrent(gallery.slice(0, 8));
		}
		setCurrent(gallery.filter(el => el.category === category));
	};

	const loadMore = () => {
		console.log('load more');
	};

	return (
		<Wrapper>
			<Container>
				<SectionTitle text="Best Sellers" />
				<BestSellersCategory chooseCategory={chooseCategory} />

				<Row as="ul" xs={2} md={3} xl={4} className={'mb-3 p-2'}>
					{current.map(item => (
						<Col as="li" className={'p-2'} key={item.id}>
							<BestSellersGalleryItem gallery={item} />
						</Col>
					))}
				</Row>

				{current.length >= 8 && (
					<LoadMoreBtn type="button" onClick={loadMore}>
						Load more
					</LoadMoreBtn>
				)}
				{current.length === 0 && (
					<EmptyWrapper>
						<EmptyImg src={empty} alt="empty" />
						<EmptyText>
							Sorry, there is nothing <br />
							in this category yet
						</EmptyText>
					</EmptyWrapper>
				)}
			</Container>
		</Wrapper>
	);
};

export default BestSellers;

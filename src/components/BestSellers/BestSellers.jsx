import React, { useState } from 'react';
import {
	Wrapper,
	BestSellerTitle,
	LoadMoreBtn,
	EmptyWrapper,
	EmptyText,
	EmptyImg,
} from './BestSellers.styled';
import gallery from '../../gallery.json';
import BestSellersCategory from 'components/BestSellers/BestSellersCategory';
import BestSellersGalleryItem from 'components/BestSellers/BestSellersGalleryItem';
import empty from 'assets/img/empty.png';
import { Row, Col } from 'react-bootstrap';

const BestSellers = () => {
	const [current, setCurrent] = useState(gallery.slice(0, 8));

	console.log(current);

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
			<BestSellerTitle>Best Sellers</BestSellerTitle>
			<BestSellersCategory chooseCategory={chooseCategory} />

			<ul>
				<Row xs={2} md={3} xl={4}>
					{current.map(item => (
						<Col className="mb-3" key={item.id}>
							<BestSellersGalleryItem gallery={item} />
						</Col>
					))}
				</Row>
			</ul>

			{current.length >= 8 && <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>}
			{current.length === 0 && (
				<EmptyWrapper>
					<EmptyImg src={empty} alt="empty" />
					<EmptyText>
						Sorry, there is nothing <br />
						in this category yet
					</EmptyText>
				</EmptyWrapper>
			)}
		</Wrapper>
	);
};

export default BestSellers;

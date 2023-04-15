import React from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from 'components/shared/SectionTitle/SectionTitle';
import news from 'news.json';
import LatestNewsItem from './LatestNewsItem';
import { Row, Col } from 'react-bootstrap';

const LatestNews = () => {
	return (
		<section>
			<Container>
				<SectionTitle text="Latest news" />
				<Row as="ul" xs={1} sm={3}>
					{news.map(news => (
						<Col as="li" className="p-3" key={news.id}>
							<LatestNewsItem news={news} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default LatestNews;

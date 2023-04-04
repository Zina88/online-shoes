import React from 'react';
import { Container } from 'react-bootstrap';
import { Section } from './LatestNews.styled';
import SectionTitle from 'components/shared/SectionTitle/SectionTitle';
import news from 'news.json';
import LatestNewsItem from './LatestNewsItem';
import { Row, Col } from 'react-bootstrap';

const LatestNews = () => {
	// console.log(news);

	return (
		<Section>
			<Container>
				<SectionTitle text="Latest news" />
				<Row as="ul" xs={1} sm={3} className={'mb-3 p-2'}>
					{news.map(news => (
						<Col as="li" className="p-2" key={news.id}>
							<LatestNewsItem news={news} />
						</Col>
					))}
				</Row>
			</Container>
		</Section>
	);
};

export default LatestNews;

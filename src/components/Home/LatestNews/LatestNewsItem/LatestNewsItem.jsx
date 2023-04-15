import React from 'react';
import PropTypes from 'prop-types';
import {
	WrapperImg,
	Img,
	WrapperDescripton,
	Date,
	Title,
	Descriprion,
	WrapperReadMoreBtn,
	ReadMoreBtn,
} from './LatestNewsItem.styled';

const LatestNewsItem = ({ news }) => {
	const { date, img, title, url, description } = news;

	return (
		<>
			<WrapperImg>
				<Img src={img} alt={title.slice(0, 9)} />
			</WrapperImg>
			<WrapperDescripton>
				<Date>{date}</Date>
				<Title>{title}</Title>
				<Descriprion>{description}</Descriprion>
				<WrapperReadMoreBtn>
					<ReadMoreBtn href={url} target="_blank" rel="noreferrer">
						Read more
					</ReadMoreBtn>
				</WrapperReadMoreBtn>
			</WrapperDescripton>
		</>
	);
};

export default LatestNewsItem;

LatestNewsItem.propTypes = {
	news: PropTypes.shape({
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
};

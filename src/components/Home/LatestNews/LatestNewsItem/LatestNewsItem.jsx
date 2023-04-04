import React from 'react';
import PropTypes from 'prop-types';
import {
	Wrapper,
	WrapperImg,
	Img,
	WrapperDescripton,
	Date,
	Title,
	Descriprion,
	WrapperTitle,
} from './LatestNewsItem.styled';

const LatestNewsItem = ({ news }) => {
	const { date, img, title, url, description } = news;

	return (
		<Wrapper>
			<WrapperImg>
				<Img src={img} alt={title.slice(0, 9)} />
			</WrapperImg>
			<WrapperDescripton>
				<Date>{date}</Date>
				<WrapperTitle>
					<Title href={url} target="_blank" rel="noreferrer">
						{title}
					</Title>
				</WrapperTitle>
				{/* <Title href={url} target="_blank" rel="noreferrer">
					{title.length > 15 ? title.slice(0, 15) + '...' : title}
				</Title> */}
				<Descriprion>
					{description.length >= 130 ? description.slice(0, 130) + '...' : description}
				</Descriprion>
			</WrapperDescripton>
		</Wrapper>
	);
};

export default LatestNewsItem;

LatestNewsItem.propTypes = {
	news: PropTypes.shape({
		date: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
};

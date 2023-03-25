import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import HotProductsList from './HotProductsList';

const Slider = () => {
	return (
		<Carousel slide={false}>
			<HotProductsList />
		</Carousel>
	);
};
export default Slider;

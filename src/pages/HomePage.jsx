import React from 'react';
import Hero from 'components/Hero';
import BestSellers from 'components/BestSellers';

import Slider from 'components/Slider/Slider';
export default function HomePage() {
	return (
		<>
			<Hero />
			<Slider />
			<BestSellers />
		</>
	);
}

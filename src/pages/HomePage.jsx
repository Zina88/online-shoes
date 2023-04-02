import React from 'react';
import Hero from 'components/Hero';
import BestSellers from 'components/BestSellers';
import Slider from 'components/Slider/Slider';
import ProductDay from 'components/ProductDay/ProductDay';
import AboutUs from 'components/AboutUs';

export default function HomePage() {
	return (
		<>
			<Hero />
			<Slider />
			<BestSellers />
      <ProductDay />
			<AboutUs />
		</>
	);
}

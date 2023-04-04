import React from 'react';
import Hero from 'components/Home/Hero';
import BestSellers from 'components/Home/BestSellers';
import Slider from 'components/Home/Slider';
import ProductDay from 'components/Home/ProductDay/ProductDay';
import AboutUs from 'components/Home/AboutUs';
import FeaturedProducts from 'components/Home/FeaturedProducts';

export default function HomePage() {
	return (
		<>
			<Hero />
			<Slider />
			<BestSellers />
			<ProductDay />
			<AboutUs />

			<FeaturedProducts />
		</>
	);
}

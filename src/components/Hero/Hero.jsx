import React from 'react';
import { HeroSection, HeroTitle } from './Hero.styled';
const Hero = () => {
	return (
		<HeroSection>
			<HeroTitle>
				Super Flash Sale <span className="span"> 50% Off</span>
			</HeroTitle>
		</HeroSection>
	);
};
export default Hero;

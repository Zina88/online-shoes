import React from 'react';
import { Container } from 'react-bootstrap';
import { HeroSection, HeroTitle } from './Hero.styled';
const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<HeroTitle>
					Super Flash Sale <span className="span"> 50% Off</span>
				</HeroTitle>
			</Container>
		</HeroSection>
	);
};
export default Hero;

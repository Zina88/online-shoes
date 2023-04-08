import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BoxFooter from './components/BoxFooter';
import Socials from './components/Socials';

import {
	Wrapper,
	LogoFooter,
	LogoImgFooter,
	Address,
	Title,
	TextFooter,
	LinkAddress,
} from './Footer.styled';
import { HOME } from 'utils/consts';
import logo from 'assets/img/logoFooter.jpg';
const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<LogoFooter to={HOME}>
					<LogoImgFooter src={logo} alt={logo} width="50" />
					Shoes
				</LogoFooter>
				<Row as="ul" sm={3}>
					<Col as="li" className={'p-4'}>
						<Title>Infomation</Title>
						<TextFooter>Lorem ipsum dolor sit amet consectetur adipisicing elit. </TextFooter>
					</Col>
					<Col as="li" className={'p-4'}>
						<Title>Contact Us</Title>
						<Address>
							<ul>
								<li className="item">
									<LinkAddress href="https://goo.gl/maps/kdzSkwVZ6BGEqWC29">
										2501 W Happy Valley Rd #8, Phoenix
									</LinkAddress>
								</li>
								<li className="item">
									<LinkAddress href="mailto:info@shoes.com">info@shoes.com</LinkAddress>
								</li>
								<li className="item">
									<LinkAddress href="tel:+16235164800">+16235164800</LinkAddress>
								</li>
							</ul>
						</Address>
					</Col>
					<Col as="li" className={' p-4'}>
						<Title>Follow Us</Title>
						<div>
							<TextFooter>
								You can always be aware of all our new products by following us on social networks
							</TextFooter>
							<Socials />
						</div>
					</Col>
				</Row>
			</Container>
			<BoxFooter />
		</Wrapper>
	);
};
export default Footer;

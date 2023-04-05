import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	Wrapper,
	Box,
	Text,
	LogoFooter,
	Address,
	Title,
	TwitterIcon,
	InstagramIcon,
	FacebookIcon,
	Socials,
} from './Footer.styled';
import { HOME } from 'utils/consts';
// import logo from 'assets/img/logo.png';
const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<LogoFooter to={HOME}>
					{/* <BoxLogo>
						<LogoImgFooter src={logo} alt={logo} width="50" />
					</BoxLogo> */}
					Shoes
				</LogoFooter>
				<Row>
					<Col>
						<Title>Contact Us</Title>
						<Address>
							<ul>
								<li>
									<a href="https://goo.gl/maps/kdzSkwVZ6BGEqWC29">
										2501 W Happy Valley Rd #8, Phoenix
									</a>
								</li>
								<li>
									<a href="mailto:info@shoes.com">info@shoes.com</a>
								</li>
								<li>
									<a href="tel:+16235164800">+16235164800</a>
								</li>
							</ul>
						</Address>
					</Col>
					<Col>
						<Title>Follow Us</Title>
						<div>
							<Socials>
								<li>
									<a href="1">
										<TwitterIcon />
									</a>
								</li>
								<li>
									<a href=" ">
										<InstagramIcon />
									</a>
								</li>
								<li>
									<a href=" ">
										<FacebookIcon />
									</a>
								</li>
							</Socials>
						</div>
					</Col>
					<Col>
						<Title>Infomation</Title>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					</Col>
				</Row>
			</Container>
			<Box>
				<Text>© 2023. All Rights Reserved.</Text>
			</Box>
		</Wrapper>
	);
};
export default Footer;

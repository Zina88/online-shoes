import React from 'react';
import { Section } from './AboutUs.styled.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { SupportIcon, RefundIcon, ShippingIcon, Icon, Title, Text } from './AboutUs.styled.jsx';

const AboutUs = () => {
	return (
		<Section>
			<Container>
				<Row as="ul" xs={1} sm={3}>
					<Col as="li" className={'mb-3, p-2'}>
						<Icon>
							<ShippingIcon width={101} height={66} />
						</Icon>
						<Title>FREE SHIPPING</Title>
						<Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
					</Col>
					<Col as="li" className={'mb-3, p-2'}>
						<Icon>
							<RefundIcon width={70} height={80} />
						</Icon>
						<Title>100% REFUND</Title>
						<Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
					</Col>
					<Col as="li" className={'mb-3, p-2'}>
						<Icon>
							<SupportIcon width={70} height={90} />
						</Icon>
						<Title>SUPPORT 24/7</Title>
						<Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
export default AboutUs;

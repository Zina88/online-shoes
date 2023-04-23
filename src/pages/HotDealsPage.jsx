import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gallery from '../gallery.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { PRODUCT } from 'utils/consts.js';

export default function HotDealsPage() {
	const hotGallery = gallery.filter(i => i.offers === 'hot_deal');
	
	const location = useLocation();
	const path = location.pathname;
	console.log(path);
	const navigate = useNavigate();

	const navigatePage = id => {
		navigate(PRODUCT + '/' + id);
	};

	return (
		<Container>
			<h2>HotDealsPage</h2>
			<Row as="ul" xs={2} md={3} xl={4} className={'mb-3 p-2'}>
				{hotGallery.map(({ id, name, photo }) => (
					<Col as="li" className={'p-2'} key={id}>
						<img src={photo} alt={name} width={300} />
						<div>
							<button type="button" onClick={() => navigatePage(id)}>
								<EyeIcon width={40} fill="lightblue" />
							</button>
						</div>
						<p>{name}</p>
					</Col>
				))}
			</Row>
		</Container>
	);
}

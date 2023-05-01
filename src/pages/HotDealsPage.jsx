import React from 'react';
import { Container} from 'react-bootstrap';
import gallery from '../gallery.json';
import HotDeal from 'components/HotDeal';

export default function HotDealsPage() {
	const hotGallery = gallery.filter(i => i.offers === 'hot_deal');

	return (
		<Container>
			<HotDeal hotGallery={hotGallery} />
		</Container>
	);
}

import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Section } from './Slider.styled';
import HotProductsItem from './HotProductsItem';
import products from '../../product';

export default function Slider() {
	return (
		<Section>
			<Container>
				<Swiper
					breakpoints={{
						320: {
							slidesPerView: 2,
						},
						500: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={5}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={false}
					modules={[Autoplay, Pagination, Navigation]}
				>
					<>
						{products.map(product => (
							<SwiperSlide key={product.id}>
								<HotProductsItem products={product} />
							</SwiperSlide>
						))}
					</>
				</Swiper>
			</Container>
		</Section>
	);
}

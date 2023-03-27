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
					slidesPerView={3}
					spaceBetween={30}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					// pagination={{
					// 	clickable: true,
					// }}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					style={{
						position: 'relative',
						bottom: 64,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					className="mySwiper"
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

import React, { useEffect, useState } from 'react';
import { Current, ListImage, Image } from './GallaryProduct.styled';

const GallaryProduct = ({ images }) => {
	const [currentImage, setCurrentImage] = useState();
	useEffect(() => {
		if (!images.length) return;
		setCurrentImage(images[0]);
	}, [images]);

	return (
		<>
			<Current style={{ backgroundImage: `url(${currentImage})` }} />
			<ListImage>
				{images.map((image, i) => (
					<li key={i} className="item">
						<Image
							className={currentImage === image ? 'active' : ''}
							style={{ backgroundImage: `url(${image})` }}
							onClick={() => setCurrentImage(image)}
						></Image>
					</li>
				))}
			</ListImage>
		</>
	);
};
export default GallaryProduct;

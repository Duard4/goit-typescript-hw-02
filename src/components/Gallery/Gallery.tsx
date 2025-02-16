import ImageCard from "../ImageCard/ImageCard";
import css from "./Gallery.module.css";
import { Image } from "../types/Image";

interface GalleryProps {
	images: Image[];
	open: (image: Image) => void;
}

const Gallery = ({ images, open }: GalleryProps) => {
	return (
		<section className={css.gallery}>
			<h1 className="visually-hidden">Gallery</h1>
			<ul className={css.galleryList}>
				{images.map((image) => (
					<li key={image.id} className={css.galleryItem}>
						<ImageCard image={image} open={open} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Gallery;

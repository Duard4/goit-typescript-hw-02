import css from "./ImageCard.module.css";
import { Image } from "../types/Image";

interface ImageCardProps {
	image: Image;
	open: (image: Image) => void;
}

const ImageCard = ({ image, open }: ImageCardProps) => {
	return (
		<>
			<img
				src={image.urls.small}
				alt={image.alt_description || "Image"}
				className={css.image}
				onClick={() => open(image)}
			/>
		</>
	);
};

export default ImageCard;

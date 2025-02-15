import css from "./ImageCard.module.css";

const ImageCard = ({ image, open }) => {
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

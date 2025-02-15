import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ image, close }) => {
	return (
		<ReactModal
			isOpen={image}
			onRequestClose={close}
			overlayClassName={css.backdrop}
			className={css.modalImage}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<img
				src={image?.urls.regular}
				alt={image?.alt_description || "Image"}
				onClick={(e) => e.stopPropagation()}
			/>
		</ReactModal>
	);
};

export default ImageModal;

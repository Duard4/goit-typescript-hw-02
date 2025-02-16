import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../types/Image";

ReactModal.setAppElement("#root");

interface ImageModalProps {
	image: Image | null;
	close: () => void;
}

const ImageModal = ({ image, close }: ImageModalProps) => {
	return (
		<ReactModal
			isOpen={!!image}
			onRequestClose={close}
			overlayClassName={css.backdrop}
			className={css.modalImage}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			{image && (
				<img
					src={image.urls.regular}
					alt={image.alt_description || "Image"}
					onClick={(e) => e.stopPropagation()}
				/>
			)}
		</ReactModal>
	);
};

export default ImageModal;

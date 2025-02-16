import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
	loadImages: () => void;
}

const LoadMoreBtn = ({ loadImages }: LoadMoreBtnProps) => {
	return (
		<button
			onClick={loadImages}
			className={css.button}
			aria-label="Load more button"
		>
			Load More
		</button>
	);
};

export default LoadMoreBtn;

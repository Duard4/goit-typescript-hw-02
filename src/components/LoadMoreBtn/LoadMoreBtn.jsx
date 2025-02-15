import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadImages }) => {
	return (
		<button
			onClick={loadImages}
			className={css.button}
			aria-label="Load more button"
		>
			Load more
		</button>
	);
};

export default LoadMoreBtn;

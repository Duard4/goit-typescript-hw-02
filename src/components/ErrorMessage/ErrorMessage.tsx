import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
	return (
		<div className={css.errorSection}>
			<img
				src="https://image.cdn2.seaart.ai/static/612b2735e798688a6380ec650902b3a4/1706957482705/a9a36583cd192d739c08fe09bfb711de_low.webp"
				alt="blue girl"
			/>
			<p className={css.title}>Awww... Error happen</p>
			<p className={css.text}>It will be resolved.. maybe</p>
		</div>
	);
};

export default ErrorMessage;

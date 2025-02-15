import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch, toast }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			onSearch(searchTerm);
		} else {
			toast.error("Query cannot be empty!");
		}
	};

	return (
		<form
			className={css.searchbar}
			onSubmit={handleSubmit}
			role="search"
			aria-label="Image Search"
		>
			<label htmlFor="search-input" className="visually-hidden">
				Search for images and photos
			</label>
			<input
				type="search"
				id="search-input"
				onChange={handleInputChange}
				className={css.searchfield}
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
				aria-label="Search field"
				value={searchTerm}
			/>
			<button type="submit" aria-label="Search button">
				<IoIosSearch className={css.icon} />
			</button>
		</form>
	);
};

export default SearchBar;

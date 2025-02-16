import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
	onSearch: (query: string) => void;
	toast: typeof toast;
}

const SearchBar = ({ onSearch, toast }: SearchBarProps) => {
	const [query, setQuery] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!query.trim()) {
			toast.error("Please enter a search term.");
			return;
		}
		onSearch(query);
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
				onChange={(e) => setQuery(e.target.value)}
				className={css.searchfield}
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
				aria-label="Search field"
				value={query}
			/>
			<button type="submit" aria-label="Search button">
				<IoIosSearch className={css.icon} />
			</button>
		</form>
	);
};

export default SearchBar;

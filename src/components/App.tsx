import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { fetchImagesAPI } from "../services/api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Gallery from "./Gallery/Gallery";
import "./App.css";
import { Image } from "./types/Image";

export default function App() {
	// State variables
	const [query, setQuery] = useState<string>("");
	const [images, setImages] = useState<Image[]>([]);
	const [isError, setError] = useState<boolean>(false);
	const [isLoading, setLoading] = useState<boolean>(false);
	const [page, setPage] = useState<number>(0);
	const [selectedImage, setSelectedImage] = useState<Image | null>(null);
	const [hasMoreImages, setHasMoreImages] = useState<boolean>(false);

	const openModal = (image: Image) => setSelectedImage(image);
	const closeModal = () => setSelectedImage(null);

	const handleSearch = (searchQuery: string) => {
		if (query === searchQuery) {
			toast.error("Try a different query!");
			return;
		}
		setQuery(searchQuery);
		setImages([]);
		setPage(1);
		setHasMoreImages(true);
	};

	const incrementPage = () => setPage((prevPage) => prevPage + 1);

	useEffect(() => {
		const fetchImages = async () => {
			if (!query) {
				return;
			}
			setLoading(true);
			setError(false);

			try {
				const { results } = await fetchImagesAPI({
					query,
					page,
					per_page: 25,
					client_id: "oM_RBt9-TGEakCtzdTBZQDWSV9hMk3HMVySkeUy5_cI",
				});

				if (results.length === 0) {
					toast.error("No images found for this query.");
				}

				if (results.length < 25) {
					setHasMoreImages(false);
				}

				setImages((prevImages) => [...prevImages, ...results]);
			} catch (error) {
				console.error(error);
				setError(true);
				toast.error("An error occurred while fetching images.");
			} finally {
				setLoading(false);
			}
		};

		fetchImages();
	}, [query, page]);

	return (
		<>
			<header>
				<SearchBar onSearch={handleSearch} toast={toast} />
			</header>
			<main>
				{images.length > 0 && <Gallery images={images} open={openModal} />}
				{hasMoreImages && !isLoading && (
					<LoadMoreBtn loadImages={incrementPage} />
				)}
				{isLoading && <Loader />}
				{isError && <ErrorMessage />}
				{selectedImage && (
					<ImageModal close={closeModal} image={selectedImage} />
				)}
				<Toaster position="bottom-right" reverseOrder={false} />
			</main>
		</>
	);
}

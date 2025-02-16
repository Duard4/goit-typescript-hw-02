import axios from "axios";
import { Image } from "../components/types/Image";

axios.defaults.baseURL = "https://api.unsplash.com";

interface FetchImagesAPIParams {
	query: string;
	page: number;
	per_page: number;
	client_id: string;
}

interface FetchImagesAPIResponse {
	results: Image[];
}

export const fetchImagesAPI = async (params: FetchImagesAPIParams) => {
	const { data } = await axios.get<FetchImagesAPIResponse>(`/search/photos`, {
		params,
	});
	return data;
};

import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesAPI = async (params) => {
	const { data } = await axios.get(`/search/photos`, {
		params,
	});
	console.log(data);
	return data;
};

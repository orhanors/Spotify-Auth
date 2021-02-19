const axios = require("axios");
const ApiError = require("../classes/ApiError");
/**
 * 
export const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
export const BASE_URL_ARTIST =
	"https://deezerdevs-deezer.p.rapidapi.com/artist/";
export const HEADERS = {
	"x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
};

 */
const {
	DEEZER_SEARCH_API_URL,
	DEEZER_ARTIST_API_URL,
	DEEZER_API_KEY,
	DEEZER_API_HOST,
} = process.env;
const headers = {
	"x-rapidapi-key": DEEZER_API_KEY,
	"x-rapidapi-host": DEEZER_API_HOST,
};

exports.searchResult = async (req, res, next) => {
	const { keyword } = req.body;

	try {
		if (!keyword) throw new ApiError(400, "Request should contain keyword");
		const response = await axios({
			url: DEEZER_SEARCH_API_URL + keyword,
			headers,
			method: "get",
		});

		const data = response.data.data;
		console.log("axios response is : ", data);
		res.status(200).json({ data });
	} catch (error) {
		console.log("Search result controller error:", error);
		next(error);
	}
};

exports.artistInfo = async (req, res, next) => {
	try {
		const { artistName } = req.params;

		if (!artistName)
			throw new ApiError(400, "Request should contain artist name");

		const response = await axios({
			url: DEEZER_ARTIST_API_URL + artistName,
			headers,
			method: "get",
		});

		const data = response.data;

		res.status(200).json({ data });
	} catch (error) {
		console.log("Artist get error: ", error);
		next(error);
	}
};

exports.tracklist = async (req, res, next) => {
	try {
		const { artistId } = req.params;

		if (!artistId)
			throw new ApiError(400, "Request should contain artist name");

		const response = await axios({
			url: `https://api.deezer.com/artist/${artistId}/top?limit=50`,
			headers,
			method: "get",
		});

		const data = response.data.data;

		res.status(200).json({ data });
	} catch (error) {
		console.log("Artist tracklist get error: ", error);
		next(error);
	}
};

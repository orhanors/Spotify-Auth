import { apiCall } from "./api";
import * as config from "../configuration";

const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const SONG_REQUESTED = "SONG_REQUESTED";
const SET_SEARCH_ERROR_RESULT = "SET_SEARCH_ERROR_RESULT";
const SET_KEYWORD = "SET_KEYWORD";

const searchReducer = (state = {}, action) => {
	switch (action.type) {
		case SONG_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case SET_SEARCH_RESULT:
			return {
				...state,
				errorMessage: null,
				loading: false,
				songList: action.payload,
			};
		case SET_SEARCH_ERROR_RESULT:
			return {
				...state,
				errorMessage: action.payload,
				loading: false,
			};
		case SET_KEYWORD:
			return {
				...state,
				keyword: action.payload,
			};
		default:
			return state;
	}
};

//ACTION CREATORS

export const setKeyword = (keyword) => ({
	type: SET_KEYWORD,
	payload: keyword,
});

export const songRequested = () => ({
	type: SONG_REQUESTED,
});

export const setSearchResult = (data) => ({
	type: SET_SEARCH_RESULT,
	payload: data,
});

export const setSearchError = (error) => ({
	type: SET_SEARCH_ERROR_RESULT,
	payload: error,
});

export const loadSearchResult = (keyword) =>
	apiCall({
		url: config.BASE_URL + keyword,
		headers: config.HEADERS,
		onStart: SONG_REQUESTED,
		onSuccess: SET_SEARCH_RESULT,
		onError: SET_SEARCH_ERROR_RESULT,
	});

export default searchReducer;

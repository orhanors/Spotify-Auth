import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import api from "./middleware/api";
export const initialState = {
	// currentSong: {},
	// songs: {
	// 	likedSongs: [],
	// },
	artist: {
		loading: false,
		errorMessage: null,
		performer: {},
		isError: false,
	},

	search: {
		songList: [],
		keyword: "",
		loading: false,
		errorMessage: null,
	},
	user: {
		userInfo: {},
		isLoggedIn: false,

		errorMessage: null,
	},
};
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function () {
	return createStore(
		rootReducer,
		initialState,
		composedEnhancer(applyMiddleware(thunk, api))
	);
}

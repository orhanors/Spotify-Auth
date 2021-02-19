import { apiCall } from "./api";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT_ERROR = "LOGOUT_ERROR";

const userReducer = (
	state = { userInfo: {}, isLoggedIn: false, errorMessage: null },
	action
) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isLoggedIn: true, userInfo: action.payload };
		case LOGIN_ERROR:
			return { ...state, errorMessage: action.payload };
		case LOGOUT:
			return { userInfo: {}, isLoggedIn: false, errorMessage: null };
		case LOGOUT_ERROR:
			return { ...state, errorMessge: action.payload };
		default:
			return state;
	}
};

export const getProfile = () =>
	apiCall({
		url: process.env.REACT_APP_BE_URL + "/users/me",
		onSuccess: LOGIN,
		onError: LOGIN_ERROR,
	});

export const logout = () =>
	apiCall({
		url: process.env.REACT_APP_BE_URL + "/users/logout",
		onSuccess: LOGOUT,
		onError: LOGOUT_ERROR,
	});
export default userReducer;

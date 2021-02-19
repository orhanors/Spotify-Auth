import axios from "axios";
import * as actions from "../api";

//description=${description}&location=${location}

const api = ({ dispatch }) => (next) => async (action) => {
	if (action.type !== "API_CALL") {
		//if action is not for api call,go to the next step

		return next(action);
	}

	const {
		url,
		headers,
		method,
		data,
		onSuccess,
		onStart,
		onError,
	} = action.payload;

	//"onStart" represents loading and makes it true,
	//"onSuccess" action makes it false
	if (onStart) dispatch({ type: onStart });
	next(action); //we can also delete this. It's for seeing the 'api' action details
	try {
		const response = await axios({
			url,
			method,
			data,
			headers,
		});

		if (response?.data.data) {
			dispatch(actions.apiCallSuccess(response.data.data));
			if (onSuccess)
				dispatch({ type: onSuccess, payload: response.data.data });
		} else {
			dispatch(actions.apiCallSuccess(response.data));
			if (onSuccess)
				dispatch({ type: onSuccess, payload: response.data });
		}

		//General
		//Spesific
	} catch (error) {
		console.log("axios error is: ", error);
		//General error action
		dispatch(actions.apiCallFailed(error.message));

		//Spesific error action
		if (onError) dispatch({ type: onError, payload: error.message });
	}
};

export default api;

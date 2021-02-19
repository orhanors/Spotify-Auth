const API_CALL = "API_CALL";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILED = "API_CALL_FAILED";

//ACTION CREATORS
export const apiCall = (details) => ({ type: API_CALL, payload: details });
export const apiCallSuccess = (data) => ({
	type: API_CALL_SUCCESS,
	payload: data,
});
export const apiCallFailed = (error) => ({
	type: API_CALL_FAILED,
	payload: error,
});

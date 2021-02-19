const SET_UNDO_TRUE = "SET_UNDO_TRUE";
const SET_UNDO_FALSE = "SET_UNDO_FALSE";

const undoReducer = (state = false, action) => {
	switch (action.type) {
		case SET_UNDO_TRUE:
			return true;
		case SET_UNDO_FALSE:
			return false;
		default:
			return state;
	}
};

export const setUndoTrue = () => ({ type: SET_UNDO_TRUE });
export const setUndoFalse = () => ({ type: SET_UNDO_FALSE });

export default undoReducer;

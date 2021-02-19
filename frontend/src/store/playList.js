const ADD_PLAYLIST = "ADD_PLAYLIST";
const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
const playlistsReducer = (
	state = [{ id: "", name: "", songs: [] }],
	action
) => {
	switch (action.type) {
		case ADD_PLAYLIST:
			return [...state, action.payload];

		case REMOVE_PLAYLIST:
			return state;
		default:
			return state;
	}
};

//ACTION CREATORS

export const addPlaylist = (playlist) => ({
	type: ADD_PLAYLIST,
	payload: playlist,
});

export default playlistsReducer;

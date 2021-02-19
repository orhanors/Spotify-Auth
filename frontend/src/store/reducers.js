import { combineReducers } from "redux";
import playlistReducer from "./playList";
import searchReducer from "./search";
import userReducer from "./user";
import currentSongReducer from "./currentSong";
import undoable from "redux-undo";
import undoReducer from "./undo";
import artistReducer from "./artist";

const combinedReducers = combineReducers({
	search: searchReducer,
	currentSong: currentSongReducer,
	user: userReducer,
	artist: artistReducer,
	undo: undoReducer,
	playLists: undoable(playlistReducer),
});

export default combinedReducers;

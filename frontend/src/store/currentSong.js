const SET_CURRENT_SONG = "SET_CURRENT_SONG";

const currentSongReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

//ACTION CREATORS
export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export default currentSongReducer;

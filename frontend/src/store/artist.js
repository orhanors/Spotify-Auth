import { apiCall } from "./api"
import * as config from "../configuration"

const SET_ARTIST_RESULT = "SET_ARTIST_RESULT"
const ARTIST_REQUESTED = "ARTIST_REQUESTED"
const SET_ARTIST_ERROR_RESULT = "SET_ARTIST_ERROR_RESULT"

const artistReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTIST_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case SET_ARTIST_RESULT:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        performer: action.payload,
      }
    case SET_ARTIST_ERROR_RESULT:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        isError: true,
      }

    default:
      return state
  }
}

export const artistRequested = () => ({
  type: ARTIST_REQUESTED,
})

export const setArtisthResult = (data) => ({
  type: SET_ARTIST_RESULT,
  payload: data,
})

export const setArtistError = (error) => ({
  type: SET_ARTIST_ERROR_RESULT,
  payload: error,
})

export const loadArtistResult = (id) =>
  apiCall({
    url: config.BASE_URL_ARTIST + id,
    headers: config.HEADERS,
    onStart: ARTIST_REQUESTED,
    onSuccess: SET_ARTIST_RESULT,
    onError: SET_ARTIST_ERROR_RESULT,
  })

export default artistReducer

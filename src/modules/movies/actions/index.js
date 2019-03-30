import axios from "axios";
import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_RESOLVED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_RESOLVED,
  FETCH_MOVIE_FAILED
} from "../constant";

export const getMovies = ({ searchTerm, page = 1 }) => async dispatch => {
  let API = `http://www.omdbapi.com/?apikey=282430a2&s=${searchTerm}&page=${page}&plot=full`;

  dispatch({
    type: FETCH_MOVIES_PENDING
  });

  try {
    const response = await axios.get(API);

    if (page === 1) {
      dispatch({
        type: FETCH_MOVIES_RESOLVED,
        payload: response.data
      });
    }

    return response;
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_MOVIES_FAILED,
      payload: error
    });
  }
};

export const getMoviesDetails = ({ id }) => dispatch => {
  let API = `http://www.omdbapi.com/?apikey=282430a2&i=${id}&plot=full`;

  dispatch({ type: FETCH_MOVIE_PENDING, API });

  return axios
    .get(API)
    .then(response => {
      dispatch({ type: FETCH_MOVIE_RESOLVED, payload: response.data });
      return response;
    })
    .catch(error => {
      dispatch({ type: FETCH_MOVIE_FAILED, payload: error });
      return error;
    });
};

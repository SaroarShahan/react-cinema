import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_RESOLVED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_RESOLVED,
  FETCH_MOVIE_FAILED
} from "../constant";

const initState = {
  moviesList: [],
  movie: {},
  fetchingMoviesList: false,
  fetchingMovie: false
};

export const getMovies = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        fetchingMovies: true
      };

    case FETCH_MOVIES_RESOLVED:
      return {
        ...state,
        moviesList: action.payload,
        fetchingMoviesList: false
      };

    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        fetchingMovies: false
      };

    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        fetchingMovie: true
      };
    case FETCH_MOVIE_FAILED:
      return {
        ...state,
        fetchingMovie: false
      };

    case FETCH_MOVIE_RESOLVED:
      return {
        ...state,
        movie: action.payload,
        fetchingMovie: false
      };

    default:
      return state;
  }
};

import { combineReducers } from "redux";

import { getMovies } from "../modules/movies/reducer";

const rootReducers = combineReducers({
  movies: getMovies
});

export default rootReducers;

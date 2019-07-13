import {LOAD_MOVIES, UPDATE_SEARCH_KEY, UPDATE_CURRENT_PAGE, UPDATE_SELECTED_MOVIE} from './actions'
import initState from './redux';

  const AppReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_MOVIES:
          return updateMovies(action.movies, state);
      case UPDATE_SEARCH_KEY:
        return updateSearchKey(action.searchKey, state);
      case UPDATE_CURRENT_PAGE:
        return updateCurrentPage(action.cp, state);
      case UPDATE_SELECTED_MOVIE:
        return updateSelectedMovie(action.movieId, state);
      default:
        return state;
    }
  }
  const updateSelectedMovie = (movieId, state) => {
    return {
      ...state,
      selectedMovie: movieId
    }
  }
const updateMovies = (movies, state) => {
    return {
        ...state,
        movies
      }
}
const updateSearchKey = (searchKey, state) => {
    return {
        ...state,
        searchKey: searchKey
      }
}
const updateCurrentPage = (cp, state) => {
  return {
      ...state,
      currentPage: cp
    }
}
  export default AppReducer;
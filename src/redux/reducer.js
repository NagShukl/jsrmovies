import {LOAD_MOVIES, UPDATE_SEARCH_KEY, UPDATE_CURRENT_PAGE} from './actions'
import initState from './redux';

  const AppReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_MOVIES:
          return updateMovies(action.movies, state);
      case UPDATE_SEARCH_KEY:
        return updateSearchKey(action.searchKey, state);
      case UPDATE_CURRENT_PAGE:
        return updateCurrentPage(action.cp, state);
      default:
        return state;
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
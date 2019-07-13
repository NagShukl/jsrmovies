export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_SEARCH_KEY = 'UPDATE_SEARCH_KEY';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
export const UPDATE_SELECTED_MOVIE = 'UPDATE_SELECTED_MOVIE';

export const updateSeclectedMovieAction = (movieId)=>{
    return{
        type: UPDATE_SELECTED_MOVIE,
        movieId
    }
}
export const updateMoviesAction= (movies)=>{
    return{
        type: LOAD_MOVIES,
        movies
    }
}
export const updateSearchKeyAction= (searchKey)=>{
    return{
        type: UPDATE_SEARCH_KEY,
        searchKey
    }
}
export const updateCurrentPageAction = (cp)=>{
    return{
        type: UPDATE_CURRENT_PAGE,
        cp
    }
}
// export const reduceQuantity = (id) => {
//     return{
//         type: REDUCE_QUANTITY,
//         id
//     }
// }
// export const loadProducts = (products) => {
//     return{
//         type: INITIAL_DATA,
//         products
//     }
// }
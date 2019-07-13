export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_SEARCH_KEY = 'UPDATE_SEARCH_KEY';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

//add cart action
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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchKeyAction, updateCurrentPageAction } from '../redux/actions';
import PagingBar from './PagingBar';
import AppError from './AppError';
import MovieList from './MovieList';

const SearchContainer = (props) => {
    const searchKey = useSelector(state => state.searchKey);
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const performSearch = (e) => {
        e.preventDefault();
        const val = e.target.searchInput.value;
        dispatch(updateCurrentPageAction(1));
        dispatch(updateSearchKeyAction(val));
    }
    return (
        <div>
            <div className="SearchContainer" data-test="SearchContainer">
                <form onSubmit={performSearch}>
                    <input name="searchInput" type="search" className='form-control' autoComplete="off"
                        placeholder='Search key...' defaultValue={searchKey} data-test="movieSearchInput"></input>
                </form>
            </div>
            {
                movies.totalResults > 0 ? <MovieList></MovieList>
                    : ''
            }
            {
                movies.totalResults > 0 ? <PagingBar totalResults={movies.totalResults}></PagingBar>
                    : ''
            }
            {
                (!movies.totalResults || movies.totalResults === 0) ? <AppError errMsg={props.error}></AppError>
                    : ''
            }
        </div>

    );
};
export default SearchContainer;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchKeyAction, updateCurrentPageAction } from '../redux/actions';

const SearchContainer = () => {
    const dispatch = useDispatch();
    const performSearch = (e) => {
        e.preventDefault();
        const val = e.target.searchInput.value;
        console.log('Search key change = ' + val);
        dispatch(updateCurrentPageAction(1));
        dispatch(updateSearchKeyAction(val));
    }
    return (
        <div className="SearchContainer">
            <form onSubmit={performSearch}>
                <input name="searchInput" type="search" className='form-control' autoComplete="off"
                    placeholder='Search key...'></input>
            </form>
        </div>
    );
};
export default SearchContainer;
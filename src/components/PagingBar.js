import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPageAction } from '../redux/actions';

const PagingBar = (props) => {
    const currentPage = useSelector(state => state.currentPage);
    // const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    // const performSearch = (e) => {
    //     e.preventDefault();
    //     const val = e.target.searchInput.value;
    //     console.log('Search key change = ' + val);
    //     dispatch(updateCurrentPageAction(1));
    //     dispatch(updateSearchKeyAction(val));
    // }
    const getNextPage = () => {
        dispatch(updateCurrentPageAction(currentPage + 1));
        console.log('getNextPage currentPage=' + currentPage);
        // performSearchMovie();
      }
      const getPreviousPage = () => {
        dispatch(updateCurrentPageAction(currentPage - 1));
        console.log('getPreviousPage currentPage=' + currentPage);
        // performSearchMovie();
      }
    return (
        <div className="pagingBar">
            <button onClick={getPreviousPage} value="next">&lt;</button>
            Page {currentPage} {props.totalResults}
        <button onClick={getNextPage} value="next">&gt;</button>
        </div>
    );
};
export default PagingBar;
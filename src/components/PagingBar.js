import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPageAction } from '../redux/actions';

const PagingBar = (props) => {
    const currentPage = useSelector(state => state.currentPage);
    const dispatch = useDispatch();

    const getNextPage = () => {
        dispatch(updateCurrentPageAction(currentPage + 1));
    }
    const getPreviousPage = () => {
        dispatch(updateCurrentPageAction(currentPage - 1));
    }
    const getFirstPage = () => {
        dispatch(updateCurrentPageAction(1));
    }
    const getLastPage = () => {
        let lastPage = props.totalResults / 10;
        lastPage = props.totalResults % 10 === 0 ? lastPage : lastPage + 1;
        dispatch(updateCurrentPageAction(Number.parseInt(lastPage)));
    }

    return (
        <div className="pagingBar">
            <div onClick={getFirstPage} className="pageBtn previousBtn" title="First Page">&#9664;</div>
            <div onClick={getPreviousPage} className={currentPage === 1 ? 'noDisplay' : 'pageBtn previousBtn'}
                title="Previous Page">&#9665;</div>
            <div className="pageData">Page {currentPage} of {props.totalResults} Results.</div>
            <div onClick={getLastPage} className="pageBtn nextBtn" title="Last Page">&#9654;</div>
            <div onClick={getNextPage} className={currentPage * 10 >= props.totalResults ? 'noDisplay' : 'pageBtn nextBtn'}
                title="Next Page">&#9655;</div>

        </div>
    );
};
export default PagingBar;
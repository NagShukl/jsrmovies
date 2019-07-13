import React, { useState, useEffect } from 'react';
import movieService from '../services/api/Movie';
import { updateMoviesAction, updateSearchKeyAction, updateCurrentPageAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import SearchContainer from './searchContainer';
import PagingBar from './PagingBar';

const MovieApp = () => {
  // const [movies, setMovies] = useState({Search: [],totalResults: 0});
  const movies = useSelector(state => state.movies);
  const searchKey = useSelector(state => state.searchKey);
  const currentPage = useSelector(state => state.currentPage);
  const selectedMovie = useSelector(state => state.selectedMovie);

  // use to dispatch action
  const dispatch = useDispatch();
  const setMovies = (movies) => dispatch(updateMoviesAction(movies));
  const updateCurrentPage = (currentPage) => dispatch(updateCurrentPageAction(currentPage));

  useEffect(() => {
    // make an API call to load twittes
    console.log('**JAI Shri Ram!! useEffect making call to get data');
    performSearchMovie();
  }, [searchKey, currentPage]);

  const performSearchMovie = (() => {
    console.log('**JSR performing search with searchKey=', searchKey + ' : ' + currentPage);
    if (searchKey === '')
      return;
    movieService.searchMovieList(searchKey, currentPage).then(response => {
      console.log('**JSR got movies=' + response.data.totalResults + ' : ' + response.data.Search.length);
      movies.Search = response.data.Search;
      movies.totalResults = response.data.totalResults;
      setMovies({ ...movies });
    }).catch(err => {
      console.log('**JSR something went wrong with api call' + err);
      movies.Search = [];
      movies.totalResults = 0;
      setMovies({ ...movies });
    })
  });
  // const getMovieDetailsPanelClass = () => {
  //   if(selectedMovie === '') {
  //     return ;
  //   }else {
  //     return 'movieDetailsPanel flex-column';
  //   }
  //   widthFull
  // }
  
  return (
    <div className="movieApp d-flex flex-row">
      <div className={selectedMovie === ''?'searchPanel flex-column widthFull':'searchPanel flex-column width30p'}>
        <SearchContainer></SearchContainer>
        
        {
          movies.totalResults > 0?<MovieList></MovieList>
            :''         
        }
        {
           movies.totalResults > 0?<PagingBar totalResults={movies.totalResults}></PagingBar>
           :''
        }
        <div className="overlaySearchPanel"></div>
      </div>
      <div className={selectedMovie === ''?'movieDetailsPanel flex-column noDisplay':'movieDetailsPanel flex-column'}>
        Jai Shri Ram!!
      </div>
    </div>
  );
};


export default MovieApp;

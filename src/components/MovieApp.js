import React, { useState, useEffect } from 'react';
import movieService from '../services/api/Movie';
import { updateMoviesAction, updateSeclectedMovieAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import SearchContainer from './searchContainer';
import PagingBar from './PagingBar';
import AppError from './AppError';

const MovieApp = () => {
  const movies = useSelector(state => state.movies);
  const searchKey = useSelector(state => state.searchKey);
  const currentPage = useSelector(state => state.currentPage);
  const selectedMovie = useSelector(state => state.selectedMovie);

  // use to dispatch action
  const dispatch = useDispatch();
  const setMovies = (movies) => dispatch(updateMoviesAction(movies));
  const [error, setError] = useState('');

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
      
      if(response.data.Response === 'False') {
        setError(response.data.Error);
        movies.Search = [];
        movies.totalResults = 0;
        setMovies({ ...movies });
        return;
      }
      movies.Search = response.data.Search;
      movies.totalResults = response.data.totalResults;
      setMovies({ ...movies });
    }).catch(err => {
      setError('Something went wrong, Please try refreshing page.');
    })
  });

  const clearMovieSelection = () => {
    dispatch(updateSeclectedMovieAction(''));
  }
  
  
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
        {
          (!movies.totalResults || movies.totalResults === 0)?<AppError errMsg={error}></AppError>
            :''         
        }
        
      </div>
      <div className={selectedMovie === ''?'movieDetailsPanel flex-column noDisplay':'movieDetailsPanel flex-column'}>
        <MovieDetails></MovieDetails>
        <div className="hideDetails" onClick={clearMovieSelection}>X</div>
      </div>
    </div>
  );
};


export default MovieApp;

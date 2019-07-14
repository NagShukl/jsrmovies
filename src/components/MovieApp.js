import React, { useState, useEffect } from 'react';
import movieService from '../services/api/Movie';
import { updateMoviesAction, updateSeclectedMovieAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import MovieDetails from './MovieDetails';
import SearchContainer from './searchContainer';


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
    performSearchMovie();
  }, [searchKey, currentPage]);

  const performSearchMovie = (() => {
    if (searchKey === '')
      return;
    movieService.searchMovieList(searchKey, currentPage).then(response => {

      if (response.data.Response === 'False') {
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
    <div className="movieApp d-flex flex-row" data-test="MovieApp">
      <div className={selectedMovie === '' ? 'searchPanel flex-column widthFull' : 'searchPanel flex-column width30p'} data-test="SearchPanel">
        <SearchContainer error={error}></SearchContainer>
      </div>
      <div className={selectedMovie === '' ? 'movieDetailsPanel flex-column noDisplay' : 'movieDetailsPanel flex-column'} data-test="MovieDetailsPanel">
        <MovieDetails></MovieDetails>
        <div className="hideDetails" onClick={clearMovieSelection}>X</div>
      </div>
    </div>
  );
};


export default MovieApp;

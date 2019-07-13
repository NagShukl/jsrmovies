import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSeclectedMovieAction } from '../redux/actions';
import MovieCard  from './MovieCard';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    const selectedMovie = useSelector(state => state.selectedMovie);
    const dispatch = useDispatch();

    const updateSelectedMovie = (id) => {
        dispatch(updateSeclectedMovieAction(id));
    }
    return (
        <div className="movieList">
            Jai Shri Ram! Selected Movie={selectedMovie}
        <ul className="movieListContainer">
          {
            movies.Search.map(ele => {
            //   return <li key={ele.imdbID}>{ele.Title}</li>;
            return MovieCard({ele, updateSelectedMovie});
            })
          }
        </ul>
        </div>
    );
};
export default MovieList;
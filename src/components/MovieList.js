import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard  from './MovieCard';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    const searchKey = useSelector(state => state.searchKey);
    // const currentPage = useSelector(state => state.currentPage);

    return (
        <div className="movieList">
        <ul className="movieListContainer">
          {
            movies.Search.map(ele => {
            //   return <li key={ele.imdbID}>{ele.Title}</li>;
            return MovieCard(ele);
            })
          }
        </ul>
        </div>
    );
};
export default MovieList;
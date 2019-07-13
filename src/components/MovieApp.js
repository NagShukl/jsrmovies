import React, { useState, useEffect } from 'react';
import movieService from '../services/api/Movie';

const MovieApp = () => {
  const [movies, setMovies] = useState({Search: [],totalResults: 0});
  const [searchKey, setSearchKey] = useState('');
  const currentPage = 1;

  useEffect(() => {
    // make an API call to load twittes
    console.log('**JAI Shri Ram!! useEffect making call to get data');
    //searchMovies();
  }, [movies]);

  const searchMovies = ((key, page) => {
    movieService.searchMovieList(key, page).then(response => {
      console.log('**JSR got movies=' + response.data.totalResults+' : '+response.data.Search.length);
      const x = {}
      x.Search = response.data.Search;
      x.totalResults = response.data.totalResults;
      // movies = {};
      movies.Search = x.Search;
      movies.totalResults = x.totalResults;
      console.log('**JSR got moviessss 11=',x);
      setMovies({...movies});
     console.log('**JSR got moviessss=',movies);
    }).catch(err => {
      alert(err);
      console.log('**JSR something went wrong with api call'+err);
      movies.Search = [];
      movies.totalResults = 0;
      setMovies(movies);
    })
  });
  const performSearch = (e) => {
    e.preventDefault();
    const val = e.target.searchInput.value;
    console.log('Search key change = ' + val);
    // if (val.length > 3) {
    searchMovies(val, 1);
    // }
  }
  const getNext = (page) => {
    searchMovies('india', 2);
  }
  return (
    <div>
      <form onSubmit={performSearch}>
        <input name="searchInput" type="search" className='form-control' q="googlesearch"
          placeholder='Search key...'></input>
      </form>
      <div className="topInfo">Jai Shri Ram : {movies.totalResults}</div>
      <ul className="tweetsContainer">
        {
          movies.Search.map(ele => {
            return <li key={ele.imdbID}>{ele.Title}</li>;
          })
        }
      </ul>
      <button onClick={getNext} value="next">Next</button>
    </div>
  );
};

// class Movies {
//   search = [];
//   totalResults = 100;  
// }

export default MovieApp;

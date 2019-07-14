import AppReducer from './reducer'
import AppConstents from '../constents/AppConstents';
import { createStore }  from 'redux';
const aa = {"Search":[{"Title":"Lagaan: Once Upon a Time in India","Year":"2001","imdbID":"tt0169102","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Chak de! India","Year":"2007","imdbID":"tt0871510","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_SX300.jpg"},{"Title":"A Passage to India","Year":"1984","imdbID":"tt0087892","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjI4MzMzMTUzMV5BMl5BanBnXkFtZTgwNzAzMDUxMDE@._V1_SX300.jpg"},{"Title":"Mr. India","Year":"1987","imdbID":"tt0093578","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjJjNjEyOTEtNDhhZi00MDM1LWExMTYtZmNjNDE1OTQ2OTE0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"},{"Title":"Mother India","Year":"1957","imdbID":"tt0050188","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDcyMDE0ZWUtYjI3Ny00N2U2LWEzMTAtYzE4OTEzZjgyNzQ1XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg"},{"Title":"Sui Dhaaga: Made in India","Year":"2018","imdbID":"tt7147540","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTRiNjg4M2ItZDg4OC00NDIxLWE0NWItYzgyMDU2NDhmNWVmXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SX300.jpg"},{"Title":"Naa Peru Surya Na Illu India","Year":"2018","imdbID":"tt7794524","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTMyMzc5ODYtM2EzOS00YmVhLWI2MTMtZWVhZjdkNmFjZDliXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_SX300.jpg"},{"Title":"India","Year":"1993","imdbID":"tt0107214","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEwNTU1NDc0Nl5BMl5BanBnXkFtZTcwMDQwMDkxMQ@@._V1_SX300.jpg"},{"Title":"24: India","Year":"2013–","imdbID":"tt2792284","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNzhiZjY3YTUtZWQxMS00ZTQ5LWEzNWQtY2UxYWQ0YTE3NGYxXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg"},{"Title":"The India Rubber Head","Year":"1901","imdbID":"tt0000359","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzg2MTRlMTYtNWRhYy00YmM0LWFlYjItYzg3MTc1ZDUxNTQ3XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"}],"totalResults":"585","Response":"True"};
const initState = {
    movies: {
      Search: aa.Search,
      totalResults: aa.totalResults
    },
    searchKey: 'Ram',
    currentPage: 1,
    selectedMovie: ''
  };

const store = createStore(
    AppReducer,
    initState
);
export default store;

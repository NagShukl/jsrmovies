import Api, {API_KEY} from '../api';

export default class Movie {
  
  static searchMovieList = (key, page = 1) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        s: key,
        page: page,
      }
    });
  }
  static searchMovieItem = (id) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        i: id
      }
    });
  }
}
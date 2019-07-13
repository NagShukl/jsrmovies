import AppReducer from './reducer'
import AppConstents from '../constents/AppConstents';
import { createStore }  from 'redux';

const initState = {
    tweets: [],
    selectedTweetType: AppConstents.tweet_types[0].type_key,
    showPostTweet: false
  };

const store = createStore(
    AppReducer,
    initState
);
export default store;
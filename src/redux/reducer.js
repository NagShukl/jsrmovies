import {LOAD_TWEETS, SWITCH_TWEET_TYPE, TOGGLE_SHOW_POST} from './actions'
import initState from './redux';

  const AppReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_TWEETS:
          return loadTweets(action.tweets, state);
      case SWITCH_TWEET_TYPE:
        return switchTweetType(action.tweetType, state);
      case TOGGLE_SHOW_POST:
        return toggleShowPost(state);
      default:
        return state;
    }
  }
const loadTweets = (tweets, state) => {
    return {
        ...state,
        tweets
      }
}
const switchTweetType = (tweetType, state) => {
    return {
        ...state,
        selectedTweetType: tweetType,
        refreshLocal: false
      }
}
const toggleShowPost = (state) => {
  return {
      ...state,
      showPostTweet: !state.showPostTweet
    }
}
  export default AppReducer;
export default {
  API_BASE: 'http://localhost:4000/gettweets',
  GRAPH_QL_BASE: "http://localhost:5000/graphql",
  RETWEET: 'RETWEET',
  FAVOTIE: 'FAVOTIE',
  tweet_types: [
    {
      type_url: 'favorites/list',
      type_key: 'FAVORITE_TWEETS',
      type_display: 'Favorite Tweets'
    },
    {
      type_url: 'statuses/home_timeline',
      type_key: 'HOME_TIMELINE',
      type_display: 'Home Timeline'
    },
    {
      type_url: 'statuses/user_timeline',
      type_key: 'USER_TIMELINE',
      type_display: 'user Timeline'
    },
    {
      type_url: 'statuses/mentions_timeline',
      type_key: 'MENTIONS_TIMELINE',
      type_display: 'Mentioned Tweets'
    }

  ],
  getFetchTweetUrlFor(type) {
    // alert(AppConstents.tweet_types[0].type_key+'**JSR,..type='+type+' : '+);
    return this.API_BASE + '?urlpattern=' + this.tweet_types.filter(ele => (ele.type_key === type))[0].type_url;
  },
  getUrlpatternForTweetType(type) {
    return this.tweet_types.filter(ele => (ele.type_key === type))[0].type_url;
  }
};
export const LOAD_TWEETS = 'LOAD_TWEETS';
export const SWITCH_TWEET_TYPE = 'SWITCH_TWEET_TYPE';
export const TOGGLE_SHOW_POST = 'TOGGLE_SHOW_POST';

//add cart action
export const loadTweetsAction= (tweets)=>{
    return{
        type: LOAD_TWEETS,
        tweets
    }
}
export const switchTweetTypeAction= (tweetType)=>{
    return{
        type: SWITCH_TWEET_TYPE,
        tweetType
    }
}
export const toggleShowPostAction = ()=>{
    return{
        type: TOGGLE_SHOW_POST
    }
}
// export const reduceQuantity = (id) => {
//     return{
//         type: REDUCE_QUANTITY,
//         id
//     }
// }
// export const loadProducts = (products) => {
//     return{
//         type: INITIAL_DATA,
//         products
//     }
// }
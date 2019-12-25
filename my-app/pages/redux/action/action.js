export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
import fetch from 'cross-fetch'
export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts:json,
    receivedAt: Date.now()
  }
}
export function invalidateSubreddit(subreddit) {
    return {
      type: INVALIDATE_SUBREDDIT,
      subreddit
    }
  }

export function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPosts(subreddit))
        return fetch(`http://localhost:8000/redux`)
                .then(
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                )
                .then(json =>
                    dispatch(receivePosts(subreddit, json))
                )
  }
}
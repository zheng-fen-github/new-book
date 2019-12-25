import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/reducer'
import {requestPosts,invalidateSubreddit,
    fetchPosts
} from './action/action'

const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
      )
      );


console.log(store.getState());
store.dispatch(requestPosts('two'))
store.dispatch(invalidateSubreddit('two'))
store.dispatch(fetchPosts('two'))




function a () {
    return (
        <h1>hello</h1>
    )
}
export default a
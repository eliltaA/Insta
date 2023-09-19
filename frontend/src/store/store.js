import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sessionReducer from './sessionReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import errorsReducer from './errorsReducer';
import postsReducer from './postsReducer';
import usersReducer from './usersReducers';
import commentsReducer from './commentsReducer';
import followingsReducer from './followingReducer';
import likesReducer from './likesReducer';
import darkModeReducer from './darkModeReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  followings: followingsReducer,
  likes: likesReducer,
  errors: errorsReducer,
  darkMode: darkModeReducer
})
let enhancer;

if (process.env.deployed === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// const middleware = [thunk]

// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger')
//   middleware.push(logger)
// }

const configureStore = (preloadedState) => (
  legacy_createStore(
    rootReducer, 
    preloadedState, 
    // applyMiddleware(thunk, logger)
    enhancer
  )
)

export default configureStore;
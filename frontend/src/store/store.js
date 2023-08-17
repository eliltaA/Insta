import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './sessionReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import errorsReducer from './errorsReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  posts: postsReducer,
  errors: errorsReducer
})

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger')
  middleware.push(logger)
}

const configureStore = (preloadedState) => (
  legacy_createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  )
)

export default configureStore;
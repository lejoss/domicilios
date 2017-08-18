/**
 * Created by lejoss on 8/17/16.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//import Reactotron from 'reactotron'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger({
  predicate: (getState, action) => __DEV__,
  collapsed: true
})

//Reactotron.connect({
//  enabled: __DEV__
//})

const enhancer = compose(
  applyMiddleware(
    thunk,
    //Reactotron.reduxMiddleware,
    logger
  )
)

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      enhancer
    )
    //Reactotron.addReduxStore(store)

  return store
}

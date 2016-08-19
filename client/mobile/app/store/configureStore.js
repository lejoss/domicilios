/**
 * Created by lejoss on 8/17/16.
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import Reactotron from 'reactotron'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger({collapsed:true})

//Reactotron.connect({
//    enabled: __DEV__
//})

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore);

export default function configureStore (initialState) {

    //Reactotron.addReduxStore(store)

    return createStoreWithMiddleware(rootReducer, initialState)
}
/**
 * Created by lejoss on 8/17/16.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import Reactotron from 'reactotron'
//import rootReducer from './reducer'

Reactotron.connect({
    enabled: __DEV__
})

const enhancer = compose (
    applyMiddleware(
        reduxThunkMiddleware,
        Reactotron.reduxMiddleware
    )
)

export default function configureStore (initialState) {
    const store = createStore(
        //rootReducer,
        initialState,
        enhancer
    )
    Reactotron.addReduxStore(store)

    return store
}
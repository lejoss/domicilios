/**
 * Created by lejoss on 8/17/16.
 */

import routes from './routes'
import restaurants from './restaurantReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurants
})

export default rootReducer
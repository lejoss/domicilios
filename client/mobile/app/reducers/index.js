/**
 * Created by lejoss on 8/17/16.
 */

import routes from './routes'
import restaurants from './restaurantReducer'
import orders from './orderReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurants,
    orders
})

export default rootReducer
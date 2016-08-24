/**
 * Created by lejoss on 8/17/16.
 */

import routes from './routesReducer'
import restaurants from './restaurantReducer'
import orders from './orderReducer'
import cart from './cartReducer'
import modals from './modalReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurants,
    orders,
    cart,
    modals,
    routes
})

export default rootReducer
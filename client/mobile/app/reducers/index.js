/**
 * Created by lejoss on 8/17/16.
 */

import routes from './routesReducer'
import restaurants from './restaurantReducer'
import orders from './orderReducer'
import cart from './cartReducer'
import UI from './uiReducer'
import {
  combineReducers
} from 'redux'

const rootReducer = combineReducers({
  restaurants,
  orders,
  cart,
  UI,
  routes
})

export default rootReducer

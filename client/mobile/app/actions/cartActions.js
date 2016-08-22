/**
 * Created by lejoss on 8/21/16.
 */
import  * as types from './actionTypes'
import axios from 'axios'

// action creators

export const cartAddItem = (item) => ({ type: types.CART_ADD_ITEM, payload: item })
export const cartRemoveItem = (itemId) => ({ type: types.ORDERS_FETCH_SUCCESS, payload: itemId })

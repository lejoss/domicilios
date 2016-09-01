/**
 * Created by lejoss on 8/21/16.
 */
import  * as types from './actionTypes'
import axios from 'axios'

// action creators

export const cartAddItem = (item) => ({ type: types.CART_ADD_ITEM, payload: item })
export const cartRemoveItem = (itemId) => ({ type: types.CART_REMOVE_ITEM, payload: itemId })
export const cartClean = (itemId) => ({ type: types.CART_CLEAN_CART })

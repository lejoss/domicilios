/**
 * Created by lejoss on 8/19/16.
 */

// Restaurant ActionTypes

export const RESTAURANTS_FETCH_START   = 'RESTAURANTS_FETCH_START'
export const RESTAURANTS_FETCH_SUCCESS = 'RESTAURANTS_FETCH_SUCCESS'
export const RESTAURANTS_FETCH_ERROR   = 'RESTAURANTS_FETCH_ERROR'

// Order ActionTypes

export const ORDERS_FETCH_START   = 'ORDERS_FETCH_START'
export const ORDERS_FETCH_SUCCESS = 'ORDERS_FETCH_SUCCESS'
export const ORDERS_FETCH_ERROR   = 'ORDERS_FETCH_ERROR'

export const ORDERS_CREATE_START   = 'ORDER_CREATE_START'
export const ORDERS_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS'
export const ORDERS_CREATE_ERROR   = 'ORDER_CREATE_ERROR'

// Cart ActionTypes

export const CART_ADD_ITEM    = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'

// Routes ActionTypes
// is this a hack ?
export const REACT_NATIVE_ROUTER_FLUX_FOCUS = 'REACT_NATIVE_ROUTER_FLUX_FOCUS'


// UI Actions

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const UI_CALL_TOAST = 'UI_SHOW_TOAST'

/**
 * Created by lejoss on 8/19/16.
 */
import  * as types from './actionTypes'
import axios from 'axios'

// action creators

export const fetchOrdersSuccess = (orders) => ({ type: types.ORDERS_FETCH_SUCCESS, payload: orders })

export const createOrderSuccess = () => ({ type: types.ORDERS_CREATE_SUCCESS })

export const fetchOrders = () => (
    dispatch => {
        dispatch({ type: types.ORDERS_FETCH_START })
        axios.get('http://192.168.1.57:5555/api/orders')
            .then( response => dispatch(fetchOrdersSuccess(response.data)))
            .catch( err => dispatch({ type: types.ORDERS_FETCH_ERROR, payload: err }))
    }
)


export const createOrder = (order) => (
    dispatch => {
        dispatch ({ type: types.ORDERS_CREATE_START })
        axios.post('http://192.168.1.57:5555/api/orders', order)
            .then( response => dispatch(createOrderSuccess(response.data)))
            .catch( err => dispatch({ type: types.ORDERS_CREATE_ERROR, payload: err }))
    }
)
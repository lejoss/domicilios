/**
 * Created by lejoss on 8/19/16.
 */
import * as types from '../actions/actionTypes'

const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
}

export default ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ORDERS_FETCH_START:
            return {
                ...state,
                fetching: true
            }

        case types.ORDERS_FETCH_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }

        case types.ORDERS_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }

        default:
            return state
    }
}
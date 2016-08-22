/**
 * Created by lejoss on 8/21/16.
 */

import * as types from '../actions/actionTypes'

const initialState = {
    items: []
}

export default cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CART_ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }


        case types.CART_REMOVE_ITEM:
            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload + 1)
                ]
            }

        default:
            return state
    }


}
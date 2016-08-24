/**
 * Created by lejoss on 8/24/16.
 */
import * as types from '../actions/actionTypes'

const initialState = {
    quantityModal: {
        isVisible: false,
        quantity: 0
    }
}

export default modalReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            return {
                ...state,
                quantityModal:{
                    ...state.quantityModal,
                    isVisible: true
                }

            }

        case types.HIDE_MODAL:
            return initialState

        case types.INCREMENT:
            return {
                ...state,
                quantityModal: {
                    ...state.quantityModal,
                    quantity: state.quantityModal.quantity + 1
                }
            }

        case types.DECREMENT:
            return {
                ...state,
                quantityModal: {
                    ...state.quantityModal,
                    quantity: state.quantityModal.quantity - 1
                }
            }

        default:
            return state
    }
}
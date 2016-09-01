/**
 * Created by lejoss on 8/31/16.
 */
/**
 * Created by lejoss on 8/24/16.
 */
import * as types from '../actions/actionTypes'

const initialState = {
    modals: {
        isVisible: false
    },
    toast: {
        isVisible: false,
        message: ''
    }
}

export default uiReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            return {
                ...state,
                modals:{
                    ...state.modals,
                    isVisible: true
                }

            }

        case types.HIDE_MODAL:
            return {
                ...state,
                modals:{
                    ...state.modals,
                    isVisible: false
                }
        }

        case types.UI_CALL_TOAST:
            return {
                ...state,
                toast:{
                    ...state.toast,
                    isVisible: true,
                    message: action.payload
                }

            }

        default:
            return state
    }
}
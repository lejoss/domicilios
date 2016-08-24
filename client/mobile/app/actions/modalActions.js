/**
 * Created by lejoss on 8/24/16.
 */
import  * as types from './actionTypes'

export const showModal = () => ({ type: types.SHOW_MODAL, payload: {}})
export const hideModal = () => ({ type: types.HIDE_MODAL, payload: {}})
export const increment = () => ({ type: types.INCREMENT, payload: {} })
export const decrement = () => ({ type: types.DECREMENT, payload: {} })
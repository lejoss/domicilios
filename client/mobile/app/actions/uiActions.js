import  * as types from './actionTypes'

export const callToast = (msg) => ({ type: types.UI_CALL_TOAST, payload: msg})

export const showModal = () => ({ type: types.SHOW_MODAL, payload: {}})
export const hideModal = () => ({ type: types.HIDE_MODAL, payload: {}})

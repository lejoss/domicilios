/**
 * Created by lejoss on 8/18/16.
 */

import * as types from '../actions/actionTypes'

// not sure if hacking this router focus action

const initialState = {
  scene: {}
}

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REACT_NATIVE_ROUTER_FLUX_FOCUS:
      return {
        ...state,
        scene: action.scene
      }

    default:
      return state
  }
}

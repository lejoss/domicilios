/**
 * Created by lejoss on 8/19/16.
 */

import * as types from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  fetched: false,
  data: [],
  error: null
}

export default restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESTAURANTS_FETCH_START:
      return {
        ...state,
        isFetching: true
      }

    case types.RESTAURANTS_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    case types.RESTAURANTS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        data: action.payload
      }

    default:
      return state
  }
}

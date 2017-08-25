/**
 * Created by lejoss on 8/19/16.
 */
import  * as types from './actionTypes'
import axios from 'axios'
import {BACKEND_URL} from '../constants';

// action creators

const fetchRestaurantsSuccess = (restaurants) => ({ type: types.RESTAURANTS_FETCH_SUCCESS, payload: restaurants })

export const fetchRestaurants = () => (
  dispatch => {
    dispatch({ type: types.RESTAURANTS_FETCH_START })
    axios.get(`${BACKEND_URL}/api/restaurants`)
      .then( response => dispatch(fetchRestaurantsSuccess(response.data)))
      .catch( err => dispatch({ type: types.RESTAURANTS_FETCH_ERROR, payload: err }))
  }
)





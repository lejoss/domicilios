/**
 * Created by lejoss on 8/19/16.
 */
import  * as types from './actionTypes'
import axios from 'axios'

// action creators

export const fetchSuccess = (restaurants) => ({ type: types.RESTAURANTS_FETCH_SUCCESS, payload: restaurants })

export const fetchRestaurants = () => (
    dispatch => {
        dispatch({ type: types.RESTAURANTS_FETCH_START })
        axios
            .get('http://192.168.1.57:5555/api/restaurants')
                .then( response => dispatch(fetchSuccess(response.data)))
                .catch( err => dispatch({ type: types.RESTAURANTS_FETCH_ERROR, payload: err }))
    }

)
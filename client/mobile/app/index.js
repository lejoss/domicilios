/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Router from './scenes'
import {fetchRestaurants} from './actions/restaurantActions'

//const RouterWithRedux = connect()(Router)

const store = configureStore()
store.dispatch(fetchRestaurants())

const Root = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

export default Root
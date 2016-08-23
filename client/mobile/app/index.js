/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Router from './routes'
import {fetchRestaurants} from './actions/restaurantActions'
import {fetchOrders} from './actions/orderActions'

//const RouterWithRedux = connect()(Router)

const store = configureStore()
//store.dispatch(fetchOrders())
//store.dispatch(fetchRestaurants())

const Root = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

export default Root
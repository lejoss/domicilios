/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Router from './routes'
import {fetchRestaurants} from './actions/restaurantActions'
import {fetchOrders} from './actions/orderActions'
import Toast from './components/common/Toast'

//const RouterWithRedux = connect()(Router)

const store = configureStore()
//store.dispatch(fetchOrders())
//store.dispatch(fetchRestaurants())

const Root = () => (
    <Provider store={store}>

        <View style={{flex:1}}>
            <Router />
            <Toast/>
        </View>
    </Provider>
)

export default Root
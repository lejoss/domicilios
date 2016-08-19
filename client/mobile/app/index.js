/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Router from './scenes'

const RouterWithRedux = connect()(Router)

const store = configureStore()
const Root = () => (
    <Provider store={store}>
        <RouterWithRedux />
    </Provider>
)

export default Root
/**
 * Created by lejoss on 8/11/16.
 */
import React, {
  Component
} from 'react'
import {View, Text} from 'react-native'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Router from './routes'
import Toast from './components/common/Toast'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <View style={{flex:1}}>
      <Router />
      <Toast/>
    </View>
  </Provider>
)

export default Root

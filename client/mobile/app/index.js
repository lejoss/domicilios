/**
 * Created by lejoss on 8/11/16.
 */
import React, {
  Component
} from 'react'
import {
  Text,
  View
} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Router from './routes'
import Toast from './components/common/Toast'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <View style={{flex:1}}>
      <Text>Hello world</Text>
      <Router />
      <Toast/>
    </View>
  </Provider>
)

export default Root

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'
import StoreListItem from './app/components/StoreListItem/index'
import List from './app/components/StoreListItem/List'
import TobBar from './app/components/common/TopBar'
import Root from './app/components/Root'
import Map from './app/components/Map/Map'

class mobile_client extends Component {

  renderScene = (route, navigator) => {
      if(route.name == 'root') {
          return <Root navigator={navigator} />
      }

      if(route.name == 'list') {
          return <List navigator={navigator} />
      }

      if(route.name == 'map') {
          return <Map navigator={navigator} />
      }
  }

  render() {
    return (
      <View style={{ flex:1 }}>
          <TobBar>
              <Text>TOPBAR</Text>
          </TobBar>
        <View style={{flex: 8,backgroundColor: 'skyblue'}} >
            <Navigator
                initialRoute={{name: 'root'}}
                renderScene={this.renderScene}>
            </Navigator>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}


AppRegistry.registerComponent('mobile_client', () => mobile_client);

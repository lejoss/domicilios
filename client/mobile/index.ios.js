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
import {RestaurantPage} from './app/components/Restaurant'
import {TopBar} from './app/components/common'
import Root from './app/components/Root'
import Map from './app/components/Map'

class mobile_client extends Component {

  renderScene = (route, navigator) => {
      if(route.name == 'root') {
          return <Root navigator={navigator} />
      }

      if(route.name == 'list') {
          return <RestaurantPage navigator={navigator} />
      }

      if(route.name == 'map') {
          return <Map navigator={navigator} />
      }
  }

  render() {
    return (
      <View style={{ flex:1 }}>
          <TopBar>
              <Text>TOPBAR</Text>
          </TopBar>
        <View style={{flex: 8, backgroundColor: '#E0E0E0'}} >
            <Navigator
                initialRoute={{name: 'root'}}
                renderScene={this.renderScene}>
            </Navigator>
        </View>
        <View style={{flex: 1, backgroundColor: '#BDBDBD'}} />
      </View>
    );
  }
}


AppRegistry.registerComponent('mobile_client', () => mobile_client);

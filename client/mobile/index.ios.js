/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StoreListItem from './app/components/StoreListItem/index'
import TobBar from './app/components/common/TopBar'

class mobile_client extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TobBar>
              <Text>TOPBAR</Text>
          </TobBar>
        <View style={{flex: 8,backgroundColor: 'skyblue'}} >
          <StoreListItem />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  "container": {
    "flex":1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "backgroundColor": "#646464"
  }
});

AppRegistry.registerComponent('mobile_client', () => mobile_client);

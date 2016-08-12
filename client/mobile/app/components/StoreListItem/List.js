/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'
import StoreList from './index'
import ListDetail from './ListDetail'

const List = () => (
    <View style={{flex:1}}>
        <TabView>
            <StoreList tabLabel="list" />
            <ListDetail tabLabel="detail" />
        </TabView>
    </View>
)

export default List
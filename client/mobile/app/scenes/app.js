/**
 * Created by lejoss on 8/17/16.
 */

import React from 'react'
import {Actions, Scene} from 'react-native-router-flux'
import Login from '../components/Login/Login'
import {RestaurantPage, Check, RestaurantMenuList} from '../components/Restaurant'
import MapPage from '../components/Map'


const scenes = Actions.create(
    <Scene key="app">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="map" component={MapPage} title="Map" />
        <Scene key="restaurants" component={RestaurantPage} title="Restaurants" />
        <Scene key="menu" component={RestaurantMenuList} title="Menu" />
    </Scene>
)

export default scenes

/**
 * Created by lejoss on 8/17/16.
 */

import React from 'react'
import {Text, Image, View} from 'react-native'
import Button from 'apsl-react-native-button'
import {Actions, ActionConst, Scene} from 'react-native-router-flux'
import Login from '../components/Login/Login'
import {RestaurantPage, Check, RestaurantMenuList} from '../components/Restaurant'
import MapPage from '../components/Map'

const scenes = Actions.create(
    <Scene key="app" onRight={(route) => Actions.check()}  rightButtonImage={require('../assets/icons/cart2.png')} rightButtonIconStyle={{height:55, width:55}}>
        <Scene key="login" component={Login} title="Login" hideNavBar={true} />
        <Scene key="map" component={MapPage} title="Map" type={ActionConst.REPLACE} renderRightButton={() => null} />
        <Scene key="restaurants" component={RestaurantPage} title="Restaurants" type={ActionConst.REPLACE}/>
        <Scene key="menu" component={RestaurantMenuList} title="Menu" />
        <Scene key="check" component={Check} title="Check"  renderRightButton={() => null}/>
    </Scene>
)

export default scenes

/**
 * Created by lejoss on 8/17/16.
 */

import React from 'react'
import {Actions, ActionConst, Scene} from 'react-native-router-flux'
import Login from '../components/Login'
//import LoginView from '../components/Login/LoginView'
import {RestaurantPage, RestaurantMenuPage} from '../components/Restaurant'
import CartPage from '../components/Cart/CartPage'
import MapPage from '../components/Map'

const scenes = Actions.create(
    <Scene key="app" onRight={(route) => Actions.cart()}  rightButtonImage={require('../assets/icons/cart2.png')} rightButtonIconStyle={{height:55, width:55}} >
        <Scene key="login" component={Login} title="Login" hideNavBar={true} />
        <Scene key="map" component={MapPage} title="Map" type={ActionConst.REPLACE} renderRightButton={() => null} />
        <Scene key="restaurants" component={RestaurantPage} title="Restaurants" type={ActionConst.REPLACE} />
        <Scene key="menu" component={RestaurantMenuPage} title="Menu" sceneStyle={{backgroundColor: "#eee"}}/>
        <Scene key="cart" component={CartPage} title="Cart"  renderRightButton={() => null}/>
    </Scene>
)

export default scenes

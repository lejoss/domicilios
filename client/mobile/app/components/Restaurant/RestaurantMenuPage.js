/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import { View, ListView } from 'react-native'
import {MenuItemCard} from './'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as cartActions from '../../actions/cartActions'
import  * as uiActions from '../../actions/uiActions'

class RestaurantMenuPage extends Component {
    constructor(props) {
        super(props)

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.renderMenuRow = this.renderMenuRow.bind(this)
        this.handleAddItemToCart = this.handleAddItemToCart.bind(this)
    }

    handleAddItemToCart(item) {
        const {cartAddItem} = this.props.actions
        const {callToast} = this.props.actions

        cartAddItem(item)
        callToast("Item added to Cart")
    }

    renderMenuRow(menuItem) {
        const restaurant = this.props.payload.locations[0] // just for testing will be dynamic in the future
        return(
            <MenuItemCard
                title={menuItem.name}
                price={menuItem.price}
                addToCart={this.handleAddItemToCart}
                restaurant={restaurant}
            />
        )
    }

    render() {
        const dataSource = this.dataSource.cloneWithRows(this.props.payload.menu.food.burgers)
        return (
            <View style={{flex:1}}>
                <ListView
                    style={{padding:15, marginTop: 70}}
                    dataSource={dataSource}
                    renderRow={this.renderMenuRow} />
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...cartActions, ...uiActions}, dispatch)
})

export default connect(null, mapDispatchToProps)(RestaurantMenuPage)



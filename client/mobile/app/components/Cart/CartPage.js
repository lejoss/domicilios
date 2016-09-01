import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import {ConfirmOrderModal} from '../common'
import Button from 'apsl-react-native-button'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as orderActions from '../../actions/orderActions'
import  * as cartActions from '../../actions/cartActions'
import  * as uiActions from '../../actions/uiActions'

class CartPage extends Component {
    constructor(props) {
        super(props)
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleConfirmOrder = this.handleConfirmOrder.bind(this)
    }

    renderCartRow = (item, sectionID, rowID) => {
        const {cartRemoveItem, callToast} = this.props.actions
        const {customer, order} = item
        return(
            <View style={{flex:1, flexDirection: "row",borderWidth:1, borderColor:"#E0E0E0"}}>
                <View style={{height:80, width:80,backgroundColor:"#BDBDBD"}}>

                </View>
                <View style={{flex:1, flexDirection: "column", backgroundColor: "#eee", padding:8}}>
                    <Text style={{textAlign:"right"}}>
                        <Button
                            onPress={() => {
                                cartRemoveItem(rowID)
                                callToast('Item Removed from cart')
                            }}
                            style={{borderWidth:0, width:20, height:20}}>
                            x
                        </Button>
                    </Text>
                    <Text style={{color:"#9E9E9E"}}>{order.itemName}</Text>
                    <Text style={{color:"#424242"}}>${order.total}</Text>
                </View>
            </View>
        )
    }

    //getTotal = () => {
    //    let total = 0
    //    this.props.cart.items.map(item => total += item.price)
    //    console.log(total)
    //}

    handleCloseModal() {
        const {hideModal} = this.props.actions
        hideModal()
    }

    handleConfirmOrder() {
        const {createOrder} = this.props.actions
        this.props.cart.items.map(item => {
            console.log(item)
            createOrder({
                customer: item.customer,
                order: item.order
            })
        })
        this.handleCloseModal()
    }

    render() {
        const {createOrder, showModal} = this.props.actions
        const dataSource = this.dataSource.cloneWithRows(this.props.cart.items)

        if (this.props.cart.items.length  == 0) {
            return (
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
                    <Text>You don't have any items yet</Text>
                </View>
            )
        }
        return(
            <View style={{flex:1}}>
                <View style={{flex:8}}>
                    <ConfirmOrderModal
                        visible={this.props.modals.confirmOrder.isVisible}
                        title="Your Order"
                        orders={this.props.cart.items}
                        confirmOrder={this.handleConfirmOrder}
                        close={this.handleCloseModal}
                    />
                    <ListView
                        style={{padding:15, marginTop: 70}}
                        dataSource={dataSource}
                        renderRow={this.renderCartRow} />
                </View>
                <View style={{flex: 1, backgroundColor: "#eee",justifyContent:"center", alignItems:"center"}}>
                    <Button onPress={() => showModal()}>order</Button>
                </View>
            </View>
        )
    }
}




const mapStateToProps = (state, ownProps) => {
    const {cart} = state
    const {modals} = state.UI

    return {modals, cart}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...orderActions, ...cartActions, ...uiActions}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
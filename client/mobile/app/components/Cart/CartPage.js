import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
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
    }

    renderCartRow = (item, sectionID, rowID) => {
        const {cartRemoveItem, callToast} = this.props.actions
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
                    <Text style={{color:"#9E9E9E"}}>{item.itemName}</Text>
                    <Text style={{color:"#424242"}}>${item.total}</Text>
                </View>
            </View>
        )
    }

    //getTotal = () => {
    //    let total = 0
    //    this.props.cart.items.map(item => total += item.price)
    //    console.log(total)
    //}

    render() {
        const {createOrder} = this.props.actions
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
                    <ListView
                        style={{padding:15, marginTop: 70}}
                        dataSource={dataSource}
                        renderRow={this.renderCartRow} />
                </View>
                <View style={{flex: 1, backgroundColor: "#eee",justifyContent:"center", alignItems:"center"}}>
                    <Button onPress={
                        () => {
                            createOrder({
                                customer: "lejoss",
                                restaurant: {
                                    coordinate: {
                                        longitude: this.props.cart.items[0].restaurant.coordinate.longitude,
                                        latitude: this.props.cart.items[0].restaurant.coordinate.latitude
                                    },
                                    name: this.props.cart.items[0].restaurant.name
                                },
                                total: 0
                            })
                        }
                    }>order</Button>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({ cart: state.cart})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...orderActions, ...cartActions, ...uiActions}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
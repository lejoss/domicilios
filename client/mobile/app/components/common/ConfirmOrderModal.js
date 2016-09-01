import React, {Component} from 'react'
import {Modal,Text,View, ScrollView} from 'react-native'
import Button from 'apsl-react-native-button'


export default class ConfirmOrderModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let total = this.props.orders
            .map(order => order.order.total)
            .reduce((total, num) => total + num)

        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", padding: 20, backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <View style={{maxHeight:420, borderRadius: 10, width:320, backgroundColor: '#fff', padding: 30}}>
                            <Text style={{textAlign: "center"}}>{this.props.title}</Text>

                            <ScrollView style={{height: 270,marginTop:5}}>
                                <View>
                                    {this.props.orders.map((order, i) => (<OrderRow key={i} order={order} />))}
                                </View>
                            </ScrollView>


                            <View style={{marginTop:20}}>
                                <Text>TOTAL: {total}</Text>
                            </View>

                            <View style={{flex:1, flexDirection:"row"}}>
                                <View style={{flex:1}}>
                                    <Button
                                        onPress={() => this.props.close()}
                                        style={{borderWidth:0}}>
                                        Cancel
                                    </Button>
                                </View>
                                <View style={{flex:1}}>
                                    <Button
                                        onPress={() => this.props.confirmOrder()}
                                        style={{borderWidth:0}}>
                                        Accept
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
        )
    }
}


const OrderRow = ({order}) => (
    <View style={{flex:1, marginTop:20}}>
        <Text>
            restaurant: {order.order.restaurant.name}
        </Text>
        <Text>
            Item: {order.order.itemName}
        </Text>
        <Text>
            quantity: {order.order.itemQuantity}
        </Text>
        <Text>
            price: ${order.order.total}
        </Text>
    </View>
)



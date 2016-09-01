import React, {Component} from 'react'
import {Modal,Text,View} from 'react-native'
import Button from 'apsl-react-native-button'


export default class ConfirmOrderModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let total = this.props.orders
            .map(order => order.itemPrice)
            .reduce((total, num) => total + num)

        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", padding: 20, backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <View style={{ borderRadius: 10, width:320, backgroundColor: '#fff', padding: 30}}>
                            <Text style={{textAlign: "center"}}>{this.props.title}</Text>

                            <View>
                                {this.props.orders.map((order, i) => (<OrderRow key={i} order={order} />))}
                            </View>

                            <View style={{marginTop:30}}>
                                {}
                                <Text>TOTAL: {total}</Text>
                            </View>

                            <View style={{flex:1, flexDirection:"row"}}>
                                <View style={{flex:1}}>
                                    <Button
                                        onPress={() => this.props.close()}
                                        style={{borderWidth:0,marginTop: 10}}>
                                        Cancel
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
            Item: {order.itemName}
        </Text>
        <Text>
            quantity: {order.itemQuantity}
        </Text>
        <Text>
            price: ${order.total}
        </Text>
    </View>
)



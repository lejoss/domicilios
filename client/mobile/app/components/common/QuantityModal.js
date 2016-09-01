import React, {Component} from 'react'
import {Modal,Text,View} from 'react-native'
import Button from 'apsl-react-native-button'


export default class QuantityModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", padding: 20, backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <View style={{ borderRadius: 10, width:320, backgroundColor: '#fff', padding: 20}}>
                            <Text style={{textAlign: "center"}}>{this.props.title}</Text>
                            <View style={{flex:1, flexDirection:"row", marginTop:20}}>
                                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                                    <Text>Quantity</Text>
                                </View>
                                <View style={{flex:1, height:40,flexDirection:"row", borderWidth:1}}>
                                    <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
                                        <Button
                                            style={{borderWidth:0,marginTop: 10}}
                                            onPress={() => {
                                                if(this.props.quantity !==0) {
                                                    this.props.decrement()
                                                }
                                            }}
                                        >
                                            -
                                        </Button>
                                    </View>
                                    <View style={{flex:1, borderLeftWidth:1, borderRightWidth:1, justifyContent:"center", alignItems:"center"}}>
                                        <Text style={{textAlign:"center", padding:5, width:40}}>
                                            {this.props.quantity}
                                        </Text>

                                    </View>
                                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                                        <Button
                                            style={{borderWidth:0,marginTop: 10}}
                                            onPress={() => {
                                                this.props.increment()
                                            }}>
                                            +
                                        </Button>
                                    </View>
                                </View>
                            </View>

                            <View style={{flex:1, flexDirection:"row"}}>
                                <View style={{flex:1}}>
                                    <Button
                                        onPress={() => this.props.close()}
                                        style={{borderWidth:0,marginTop: 10}}>
                                        Cancel
                                    </Button>
                                </View>
                                <View style={{flex:1}}>
                                    <Button
                                        onPress={() => {
                                            this.props.actions.cartAddItem({
                                                title: "title",
                                                price: "100",
                                                quantity: this.props.quantity
                                            })
                                            this.props.close()
                                        }}
                                        style={{borderWidth:0,marginTop: 10}}>
                                        Add
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
        )
    }
}



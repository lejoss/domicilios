import React, {Component} from 'react'
import {Modal,Text,View} from 'react-native'
import Button from 'apsl-react-native-button'
import  * as modalActions from '../../actions/modalActions'
import  * as cartActions from '../../actions/cartActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class QuantityModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.quantityModal.isVisible}
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
                                                if(this.props.quantityModal.quantity !==0) {
                                                    this.props.actions.decrement()
                                                }
                                            }}
                                        >
                                            -
                                        </Button>
                                    </View>
                                    <View style={{flex:1, borderLeftWidth:1, borderRightWidth:1, justifyContent:"center", alignItems:"center"}}>
                                        <Text style={{textAlign:"center", padding:5, width:40}}>
                                            {this.props.quantityModal.quantity}
                                        </Text>

                                    </View>
                                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                                        <Button
                                            style={{borderWidth:0,marginTop: 10}}
                                            onPress={() => {
                                                this.props.actions.increment()
                                            }}>
                                            +
                                        </Button>
                                    </View>
                                </View>
                            </View>

                            <View style={{flex:1, flexDirection:"row"}}>
                                <View style={{flex:1}}>
                                    <Button
                                        onPress={() => this.props.actions.hideModal()}
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
                                                quantity: this.props.quantityModal.quantity
                                            })
                                            this.props.actions.hideModal()
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

const mapStateToProps = (state, ownProps) => {
    const {quantityModal} = state.modals

    return { quantityModal }

}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...modalActions, ...cartActions}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(QuantityModal)


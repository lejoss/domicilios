/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import Button from 'apsl-react-native-button'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as orderActions from '../../actions/orderActions'

class Check extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds
        }
    }

    componentWillMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.cart.items)
        })
    }

    renderCheck = (item) => {
        return(
            <View style={{flex:1, flexDirection: "row",borderWidth:1, borderColor:"#E0E0E0"}}>
                <View style={{height:80, width:80,backgroundColor:"#BDBDBD"}}>
                </View>

                <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignItems: "flex-start", backgroundColor: "#eee", padding:8}}>
                    <Text style={{color:"#9E9E9E"}}>{item.title}</Text>
                    <Text style={{color:"#424242"}}>${item.price}</Text>
                </View>
            </View>
        )
    }

    getTotal = () => {
        let total = 0
        this.props.cart.items.map(item => total += item.price)
        console.log(total)
    }

    render() {
        this.getTotal()
        if (this.props.cart.items.length  == 0) {
            return <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
                <Text>You don't have any items yet</Text>
            </View>
        }
        return(
            <View style={{flex:1}}>
                <View style={{flex:8}}>
                    <ListView style={{padding:15, marginTop: 70}}
                              dataSource={this.state.dataSource}
                              renderRow={this.renderCheck} />
                </View>

                <View style={{flex: 1, backgroundColor: "#eee",justifyContent:"center", alignItems:"center"}}>
                    <Button style="">order</Button>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({ cart: state.cart})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(orderActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Check)

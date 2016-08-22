/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import {connect} from 'react-redux'

class Check extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds
        }
    }

    componentDidMount() {
        //console.log("cart", this.props.cart)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.cart.items)
        })
    }

    renderCheck(item) {
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

    render() {
        return(
            <ListView style={{padding:15, marginTop: 70}}
                dataSource={this.state.dataSource}
                renderRow={this.renderCheck.bind(this)} />
        )
    }
}

export default connect(({cart}) => ({cart}))(Check)

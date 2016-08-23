/**
 * Created by lejoss on 8/12/16.
 */
import React, {Component} from 'react'
import { Actions } from 'react-native-router-flux'
import {Text, View, ListView, Image} from 'react-native'
import Button from 'apsl-react-native-button'

export default class RestaurantList extends Component {
    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds
        }
    }

    componentWillMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.restaurants)
        })
    }

    renderRestaurantList = (restaurant) => (
        //<Image style={{height:80, width:80}} source={{uri: restaurant.image}} />
        <Button style={{flex:1, marginBottom:0, height:80,borderWidth:0, backgroundColor:"red", borderRadius:0 }} onPress={() => Actions.menu({payload: restaurant})}>
            <View style={{flex:1, flexDirection: "row", borderWidth:1, borderColor:"#E0E0E0"}}>
                <View style={{height:80, width:80, backgroundColor:"#BDBDBD"}}>
                </View>
                <View style={{flex:1,justifyContent: "center", alignItems: "center", backgroundColor: "#eee"}}>
                    <Text style={{color:"#9E9E9E"}}>{restaurant.name}</Text>
                </View>
            </View>
        </Button>
    )

    render() {
        return(
            <ListView
                style={{padding:15, marginTop: 70}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRestaurantList}
            />
        )
    }
}
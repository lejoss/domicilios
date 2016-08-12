/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, Text, Modal, Image, ListView} from 'react-native'
import Button from 'apsl-react-native-button'

export default class Check extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds
        }
    }

    componentDidMount() {
        const items = [
            {
                title: "Cajun Jambalaya Pasta",
                price:10,
                imageSrc: "http://www.myiconfinder.com/uploads/iconsets/256-256-b030adac9955cf87d7abe3e5f2106d90.png"
            },
            {
                title: "Bandeja Paisa",
                price:10,
                imageSrc: "http://www.myiconfinder.com/uploads/iconsets/256-256-b030adac9955cf87d7abe3e5f2106d90.png"
            },{
                title: "Sancocho de Gallina",
                price:10,
                imageSrc: "http://www.myiconfinder.com/uploads/iconsets/256-256-b030adac9955cf87d7abe3e5f2106d90.png"
            },{
                title: "Trucha Apanada",
                price:10,
                imageSrc: "http://www.myiconfinder.com/uploads/iconsets/256-256-b030adac9955cf87d7abe3e5f2106d90.png"
            }]
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
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
            <ListView style={{padding:15}}
                dataSource={this.state.dataSource}
                renderRow={this.renderCheck.bind(this)} />
        )
    }
}

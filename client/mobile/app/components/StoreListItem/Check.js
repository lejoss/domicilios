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

            <View style={{flex:1, flexDirection: "row"}}>
                <Image style={{height:80, width:80, borderWidth:1, borderColor:"skyblue"}} source={{uri: item.imageSrc}} />

                <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "steelblue", borderWidth:1, borderColor:"skyblue"}}>
                    <Text style={{color:"white"}}>{item.title}</Text>
                    <Text style={{color:"white"}}>${item.price}</Text>
                </View>
            </View>

        )
    }


    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderCheck.bind(this)} />
        )
    }
}

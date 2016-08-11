/**
 * Created by lejoss on 7/29/16.
 */

import React, { Component } from 'react'
import TopBar from '../common/TopBar'
import {
    ListView,
    Text,
    View,
    StyleSheet,
    Platform,
    Navigator,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback  } from 'react-native'


export default class StoreListItem extends Component {
    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds,
            isLoading: false
        }
    }

    componentDidMount() {
        console.log('mounted')
        this.fetchData()
    }

    fetchData() {
        return fetch('http://192.168.1.57:5555/api/stores')
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resJson),
                    isLoading: true
                })

            })
            .catch((err) => console.log(err))
    }

    renderLoadingView() {
        return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{ fontSize: 25, color:"steelblue"}}>
                    loading data ...
                </Text>
            </View>
        )
    }

    renderStoreList(store) {
        return(
            <TouchableHighlight>
                <View style={{flex:1, flexDirection: "row"}}>
                    <Image style={{height:100, width:100, borderWidth:1, borderColor:"skyblue"}} source={{uri: store.image}} />

                    <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "steelblue", borderWidth:1, borderColor:"skyblue"}}>
                        <Text style={{color:"white"}}>{store.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {

        //let TouchableElement = TouchableHighlight;
        //if (Platform.OS === 'android') {
        //    TouchableElement = TouchableNativeFeedback
        //}

        if (!this.state.isLoading) {
            return this.renderLoadingView()
        }

        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderStoreList.bind(this)} />
        )

    }
}
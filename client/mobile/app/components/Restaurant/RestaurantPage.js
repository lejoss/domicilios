/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'
import {RestaurantList, RestaurantMenuList, Check} from './'


export default class RestaurantPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [],
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
                    restaurants:  this.state.restaurants.concat(resJson),
                    isLoading: true
                })
            })
            .catch((err) => console.log(err))
    }

    renderLoadingView() {
        return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{ fontSize: 25, color:"#BDBDBD"}}>
                    loading data ...
                </Text>
            </View>
        )
    }

    render() {

        if (!this.state.isLoading) {
            return this.renderLoadingView()
        }

        return (
            <View style={{flex:1}}>
                <TabView>
                    <RestaurantList restaurants={this.state.restaurants} tabLabel="Restaurants" />
                    <RestaurantMenuList tabLabel="Menu" />
                    <Check tabLabel="Check" />
                </TabView>
            </View>
        )
    }
}




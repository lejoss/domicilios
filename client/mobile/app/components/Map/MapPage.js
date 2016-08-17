/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default class MapPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            isLoading: false
        }
    }

    componentDidMount() {
        console.log('mounted')
        this.fetchData()
    }

    fetchData() {
        return fetch('http://192.168.1.57:5555/api/orders')
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                this.setState({
                    orders:  this.state.orders.concat(resJson),
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

        return(
            <MapView style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }} >
                {this.state.orders.map((order, i) => (
                    <MapView.Marker
                        key={i}
                        pinColor="#3F51B5"
                        coordinate={order.restaurant.coordinate}
                        title={order.restaurant.name}
                        description="lolo"
                    />
                ))}

            </MapView>
        )
    }
}
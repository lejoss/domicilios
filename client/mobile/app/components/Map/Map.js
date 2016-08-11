/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default class Map extends Component {

    render() {
        return(
            <MapView style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }} />
        )
    }
}
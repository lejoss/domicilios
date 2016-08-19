/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as orderActions from '../../actions/orderActions'


const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

class MapPage extends Component {
    constructor(props) {
        super(props)
    }

    //renderLoadingView() {
    //    return (
    //        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
    //            <Text style={{ fontSize: 25, color:"#BDBDBD"}}>
    //                loading data ...
    //            </Text>
    //        </View>
    //    )
    //}

    render() {

        //if (!this.state.isLoading) {
        //    return this.renderLoadingView()
        //}

        return(
            <MapView style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }} >
                {this.props.orders.map((order, i) => (
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

const mapStateToProps = (state, ownProps) => ({ orders: state.orders.data})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(orderActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
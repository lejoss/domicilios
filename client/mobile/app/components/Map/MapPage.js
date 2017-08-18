/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loading from '../common/Loading'
import  * as orderActions from '../../actions/orderActions'

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})

class MapPage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.fetchOrders()
  }

  render() {

    const {
      orders,
      isFetching
    } = this.props

    const isEmpty = orders.data.length === 0

    return (
      <View style={{flex:1, opacity: isFetching ? 0.5 : 1}}>
        { isEmpty
        ? (isFetching ? <Loading text="loading data"/> : null)
        : (
          <MapView
            style={styles.map}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            }}
            >
            {this.props.orders.data.map((order, i) => {
            return (
              <MapView.Marker
              key={i}
              pinColor="#3F51B5"
              coordinate={order.order.restaurant.coordinate}
              title={order.order.restaurant.name}
              description="lolo"
              />
            )
            })}
          </MapView>
          )
        }
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    orders,
    customer
  } = state
  const {
    isFetching
  } = orders

  return {
    orders,
    customer,
    isFetching
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(orderActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)

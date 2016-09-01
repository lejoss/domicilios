/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {RestaurantList} from './'
import Loading from '../common/Loading'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as restaurantActions from '../../actions/restaurantActions'


class RestaurantPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {fetchRestaurants} = this.props.actions
        fetchRestaurants()
    }

    render() {
        const {restaurants, isFetching} = this.props
        const isEmpty = restaurants.data.length === 0

        return (
            <View style={{flex:1, opacity: isFetching ? 0.5 : 1}}>
                {isEmpty
                    ? (isFetching ? <Loading text="loading data"/> : null)
                    : <RestaurantList restaurants={this.props.restaurants.data} />
                }
            </View>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const {restaurants} = state
    const {isFetching} = restaurants

    return { restaurants, isFetching }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(restaurantActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)

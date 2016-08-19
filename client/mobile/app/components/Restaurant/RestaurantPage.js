/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {RestaurantList} from './'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as restaurantActions from '../../actions/restaurantActions'


class RestaurantPage extends Component {
    constructor(props) {
        super(props)

    }

    //componentDidMount() {
    //    console.log(this.props.restaurants)
    //}


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

        //if (!this.state.isLoading) {
        //    return this.renderLoadingView()
        //}

        return <RestaurantList restaurants={this.props.restaurants} />
    }
}

const mapStateToProps = (state, ownProps) => ({ restaurants: state.restaurants.data})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(restaurantActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)

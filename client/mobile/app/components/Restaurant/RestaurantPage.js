/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {RestaurantList} from './'
import { connect } from 'react-redux'


class RestaurantPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [],
            isLoading: false
        }
    }

    componentDidMount() {
        console.log(this.props.routes)
        this.fetchData()
    }

    fetchData() {
        return fetch('http://192.168.1.57:5555/api/restaurants')
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

        return <RestaurantList restaurants={this.state.restaurants} />
    }
}

const mapStateToProps = (state, ownProps) => ({routes: state.routes})

export default connect(mapStateToProps)(RestaurantPage)

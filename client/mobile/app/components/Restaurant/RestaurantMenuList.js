/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, ListView} from 'react-native'
import {Card} from '../common'

export default class RestaurantMenuList extends Component {
    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds,
            menu: {}
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.payload.food.burgers),
            menu: this.props.payload // bad practice here, redux will solve it.
        })
    }

    renderMenuCards = (card) => (
        <View style={{ flex: 1, flexDirection: "column"}}>
            <Card title={card.name} price={card.price} />
        </View>
    )


    render() {

        return (
            <ListView style={{padding:15, marginTop: 70}}
                dataSource={this.state.dataSource}
                renderRow={this.renderMenuCards} />
        )
    }
}


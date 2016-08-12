/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View, Image, ListView} from 'react-native'
import {Card} from '../common'

export default class RestaurantMenuList extends Component {
    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds
        }
    }

    componentDidMount() {
        const cards = [{title: "Cajun Jambalaya Pasta"}, {title: "Bandeja Paisa"},{title: "Sancocho de Gallina"},{title: "Trucha Apanada"}]
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(cards)
        })
    }

    renderMenuCards = (card) => (
        <View style={{ flex: 1, flexDirection: "column"}}>
            <Card title={card.title} />
        </View>
    )


    render() {

        return (
            <ListView style={{padding:15}}
                dataSource={this.state.dataSource}
                renderRow={this.renderMenuCards} />
        )
    }
}
/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {Text, View, Image, ListView} from 'react-native'
import Card from '../common/Card'

export default class ListDetail extends Component {
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



    renderCards(card) {
        return(
            <View style={{ flex: 1, flexDirection: "column"}}>
                <Card title={card.title} />
            </View>
        )
    }

    render() {

        // <Card title={title} text={text} image={image} price={price} />

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderCards.bind(this)} />
        )
    }
}
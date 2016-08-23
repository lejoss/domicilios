/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, ListView} from 'react-native'
import {Card} from '../common'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as cartActions from '../../actions/cartActions'

export default class RestaurantMenuList extends Component {
    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds
        }
    }

    componentWillMount() {

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.payload.menu.food.burgers)
        })
    }

    handleAddItem = (item) => {
        const {cartAddItem} = this.props.actions
        cartAddItem(item)
    }

    renderMenuCards = (card) => (
        <View style={{ flex: 1, flexDirection: "column"}}>
            <Card title={card.name} price={card.price} addItem={this.handleAddItem}/>
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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(cartActions, dispatch)
})

export default connect(null, mapDispatchToProps)(RestaurantMenuList)



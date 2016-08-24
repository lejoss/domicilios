/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import { View, ListView, Text, TextInput } from 'react-native'
import Button from 'apsl-react-native-button'
import {Card, QuantityModal} from '../common'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  * as modalActions from '../../actions/modalActions'

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


    renderMenuCards = (card) => (
        <View style={{ flex: 1, flexDirection: "column"}}>
            <Card title={card.name} price={card.price}  showModal={() => this.props.actions.showModal()}/>
        </View>
    )


    render() {
        return (
            <View style={{flex:1}}>
                {this.props.quantityModal.isVisible ? <QuantityModal title="title"/>: null}
                <ListView
                    style={{padding:15, marginTop: 70}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMenuCards} />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {quantityModal} = state.modals
    return {quantityModal}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(modalActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenuList)



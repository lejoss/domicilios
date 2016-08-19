/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Button from 'apsl-react-native-button'

export default class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={{ backgroundColor:"#fafafa", height:160, marginBottom: 15, borderRadius:2, shadowColor:"rgba(0,0,0,.20)", shadowOpacity: 0.8, shadowRadius:2, shadowOffset: {height:1, width:0}}}>
                <View style={{ padding: 10}}>
                    <Text style={{ fontSize: 16 , fontWeight: "bold", color:"#9E9E9E"}}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={{flex:2,flexDirection:"row", padding: 10, marginTop:-10}}>
                    <View style={{flex:2}}>
                        <Text style={{color:"#A6A6A6", fontSize:11.2}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Text>
                    </View>
                    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                        <Image source={{uri: 'http://www.myiconfinder.com/uploads/iconsets/256-256-b030adac9955cf87d7abe3e5f2106d90.png'}} style={{width: 80, height: 80, marginTop:-20}} />
                    </View>
                </View>
                <View style={{flex:1,flexDirection:"row", padding:10, marginBottom:10}}>
                    <View style={{flex:1}}>
                        <Button style={{height:35}} textStyle={{fontSize: 14}}>Add to order ${this.props.price}</Button>
                    </View>
                </View>
            </View>
        )
    }
}
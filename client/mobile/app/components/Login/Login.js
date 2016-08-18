/**
 * Created by lejoss on 8/17/16.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Button from 'apsl-react-native-button'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
    render() {
        return(
            <View style={{flex: 1 , justifyContent:"center", alignItems:"center", margin:20}}>
                <Button onPress={Actions.restaurants} style={{padding: 20}}>
                    <View style={{justifyContent: "center", alignItems:"center"}}>
                        <Text>
                            order
                        </Text>
                    </View>
                </Button>

                <Button onPress={Actions.map} style={{padding: 16}}>
                    <View style={{justifyContent: "center", alignItems:"center"}}>
                        <Text>
                            work
                        </Text>
                    </View>
                </Button>
            </View>
        )
    }
}
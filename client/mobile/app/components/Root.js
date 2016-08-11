/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Button from 'apsl-react-native-button'

export default class Root extends Component {

    navigate(routeName) {
        this.props.navigator.replace({
            name: routeName
        })
    }




    render() {
        return(
            <View style={{width:320, flexDirection:"row", padding: 24, justifyContent:"space-around"}}>

                <Button onPress={this.navigate.bind(this, 'map')} style={{ padding: 20}}>
                    <View style={{justifyContent: "center", alignItems:"center"}}>
                        <Text>
                            work
                        </Text>
                    </View>
                </Button>

                <Button onPress={this.navigate.bind(this, 'list')} style={{ padding: 16}}>
                    <View style={{justifyContent: "center", alignItems:"center"}}>
                        <Text>
                            order
                        </Text>
                    </View>
                </Button>
            </View>
        )
    }

}
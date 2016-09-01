/**
 * Created by lejoss on 8/31/16.
 */
import React, {Component} from 'react'
import { Text, View, TouchableHighlight, Animated, Dimensions } from 'react-native'
import {connect} from 'react-redux'

let windowWidth  = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height

class Toast extends Component {

    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
        //this.animatedXValue = new Animated.Value(-windowWidth)
    }

    callToast(message, type) {

        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 350
            }).start(this.closeToast())
    }

    closeToast() {
        setTimeout(() => {

            Animated.timing(
                this.animatedValue,
                {
                    toValue: 0,
                    duration: 350
                }).start()
        }, 2000)
    }


    setToastType(message='Success!', type='success') {
        let color
        if (type == 'error') color = 'red'
        if (type == 'primary') color = '#2487DB'
        if (type == 'warning') color = '#ec971f'
        if (type == 'success') color = '#aaa'
       // this.setState({ toastColor: color, message: message })
    }

    render() {

        let animation = this.animatedValue.interpolate({
            inputRange: [0, .3, 1],
            outputRange: [-70, -10, 0]
        })

        return (
            <View style={{position: 'absolute',left:0, top:0, right:0}}>

                {this.props.isVisible ? this.callToast('primary') : null}

                <Animated.View  style={{ transform: [{ translateY: animation }], height: 65, backgroundColor: "rgba(0,0,0,.7)", position: 'absolute',left:0, top:0, right:0, justifyContent:  'center' }}>
                    <Text style={{ marginLeft: 10,  color: '#eee',  fontSize:16, fontWeight: 'bold', textAlign: "center" }}>
                        { this.props.message }
                    </Text>
                </Animated.View>

            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {toast} = state.UI
    const {isVisible, message} = toast

    return { toast, isVisible, message }
}

export default connect(mapStateToProps, null)(Toast)


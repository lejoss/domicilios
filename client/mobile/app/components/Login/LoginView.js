import React, {Component} from 'react'
import {Text, View, TextInput} from 'react-native'
import Button from 'apsl-react-native-button'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'username',
      password: 'password'
    };
  }

  componentWillMount() {}

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 18}}>logo</Text>
        </View>
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>

          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft: 25, marginRight: 25, textAlign: "center"}}
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
          />
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft: 25, marginRight: 25, textAlign: "center"}}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          />

        </View>
        <View style={{flex:1,justifyContent: "center", alignItems: "center"}}>
          <Button style={{borderColor: 'gray', marginLeft: 25, marginRight: 25, borderRadius:0}}> login</Button>
        </View>
      </View>
    )
  }
}


//function mapStateToProps(state, ownProps) {
//  return {
//  state: state
//  }
//}
//
//function mapDispatchToProps(dispatch) {
//  return {
//  actions: bindActionCreators(dispatch)
//  }
//}

export default LoginView

import React, {PropTypes} from 'react'
import {Text, View} from 'react-native'

const Loading = ({text}) => (
  <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
    <Text style={{ fontSize: 25, color:"#BDBDBD"}}>
      {text}
    </Text>
  </View>
)

export default Loading

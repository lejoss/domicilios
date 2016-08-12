import React, {PropTypes} from 'react'
import {
    View
} from 'react-native'

const TopBar = ({ children }) => (
    <View style={{flex: 2,backgroundColor: '#BDBDBD', justifyContent: "center", alignItems:"center"}}>
        {children}
    </View>
)

TopBar.propTypes = {
    //myProp: PropTypes.string.isRequired
}

export default TopBar
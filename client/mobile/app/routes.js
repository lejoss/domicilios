/**
 * Created by lejoss on 8/19/16.
 */
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import { Router, Reducer } from 'react-native-router-flux'
import scenes from './scenes/app'

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: {
    width: 2,
    height: 4
  },
  shadowOpacity: 0.5,
  shadowRadius: 3
})

class Routes extends React.Component {

  // not sure how this works
  // this reducer will dispatch focus action when routing
  reducerCreate = (params) => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action)
      return defaultReducer(state, action);
    };
  }

  render() {
    return (
      <Router
    createReducer={this.reducerCreate}
    scenes={scenes}
    getSceneStyle={getSceneStyle}/>
    );
  }
}

export default connect()(Routes);

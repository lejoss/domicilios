/**
 * Created by lejoss on 8/18/16.
 */
import {ActionConst} from 'react-native-router-flux'

const initialState = {
    scene: {}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionConst.FOCUS:
            console.log('lolo')
            return {
                ...state,
                scene: action.scene
            }

        default:
            return state
    }
}
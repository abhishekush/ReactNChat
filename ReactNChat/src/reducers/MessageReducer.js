import {TYPING, SEND_MESSAGE} from '../actions/types'


const INITIAL_STATE = {
    typing: false,
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case TYPING:
            return {...state, typing:true, text: action.payload}
        default:
            return state
    }
}
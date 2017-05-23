import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_CLICKED,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    id: 0,
    username: ''

}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    console.log(state);
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_CLICKED:
            return {...state, password: action.payload.password, email: action.payload.email}
        case LOGIN_SUCCESS:
            return {...state, password: action.payload.password, email: action.payload.password, id: action.payload.id, username: action.payload.username}
        case LOGIN_FAIL:
            return INITIAL_STATE
        default:
            return state
    }
}
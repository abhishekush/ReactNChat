import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import MessageReducer from './MessageReducer';
export default combineReducers({
    auth: AuthReducer,
    message: MessageReducer
})
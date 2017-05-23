import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_CLICKED,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import {Actions} from 'react-native-router-flux';
import {Keyboard} from 'react-native';
import Config from '../Config';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginClicked = ({email,password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_CLICKED,
            payload: {email, password}
        });
        fetch(Config.HOST + Config.API_END_POINT + 'login', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson.email);
                loginSuccess({dispatch,email,password, id: resJson.id, username: resJson.username})
            })
            .catch((err) => {
                console.log(err);
                loginFail({dispatch})
            })
    }
};

export const loginSuccess = ({dispatch, email, password, id, username}) => {
  dispatch({
      type: LOGIN_SUCCESS,
      payload: {email, password, id, username}
  })

    Config.socket.emit('new connection',{id});
  Actions.main();

}

export const loginFail = ({dispatch}) => {
    dispatch({
        type: LOGIN_FAIL,
    })
}


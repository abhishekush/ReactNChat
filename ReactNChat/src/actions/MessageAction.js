import {TYPING, SEND_MESSAGE} from './types';
import Config from '../Config';
export const messageTyping = ({text, id}) => {
  return (dispatch) => {
      Config.socket.emit('typing', {text,id})
      dispatch({type: TYPING, payload: text})
  }

};
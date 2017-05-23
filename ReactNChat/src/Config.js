import SocketIOClient from 'socket.io-client';
host= 'http://4ee85aa3.ngrok.io'
export default {
    HOST :host,
    API_END_POINT : '/api/',
    socket : SocketIOClient(host, { transports: ['websocket'] })
}
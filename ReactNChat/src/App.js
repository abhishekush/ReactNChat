import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
export default class App extends Component{
    render(){
        const store = createStore(reducers,{}, applyMiddleware(ReduxThunk))
        return(
         <Provider store={store}>
          <Router/>
         </Provider>
        )
    }
}
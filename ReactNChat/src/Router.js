import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';
import Login from './components/Login';
import Home from './components/Home';
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="auth" hideNavBar={true}>
                <Scene key="login" component={Login} />
            </Scene>
            <Scene key="main" hideNavBar={true}>
                <Scene key="home" component={Home} />
            </Scene>
        </Router>
    )
}

export default RouterComponent
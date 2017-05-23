import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import {
    Input,
    Button,
    Background,
    Row
} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginClicked} from '../actions';
class Login extends Component{
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);

    }
    onLoginClick(){

        this.props.loginClicked({email: this.props.email, password: this.props.password})
    }
    render(){
        return(
            <Background source={require('../../assets/back1.png')}>
                <View style={{flexGrow:1,alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../../assets/icon_login.png')} style={{width:100, height: 100}}></Image>

                </View>
                 <View style={styles.inputs}>
                    <Row style={styles.row}>
                        <Input
                         placeholder = "Enter name"
                         onChangeText = {this.onEmailChange.bind(this)}
                         value = {this.props.email}
                         underlineColorAndroid="black"
                        />
                    </Row>
                    <Row style={styles.row}>
                        <Input
                            placeholder = "Enter password"
                            onChangeText = {this.onPasswordChange.bind(this)}
                            value = {this.props.password}
                            underlineColorAndroid="black"
                        />
                    </Row>
                 </View>
                    <Row style={styles.button}>
                        <Button
                            onPress={this.onLoginClick.bind(this)}

                        >Get Started</Button>
                    </Row>

            </Background>
        )
    }
}

const styles = {
    inputs: {
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        alignSelf: 'flex-end',
        height:60
    },
    row:{
        paddingBottom: 0,
        marginBottom:20
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password} = auth;
    return {email, password}
}

export default connect(mapStateToProps,{emailChanged, passwordChanged, loginClicked})(Login)
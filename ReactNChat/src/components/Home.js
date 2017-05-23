import React, { Component, PropTypes} from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import {messageTyping} from '../actions';
import {connect} from 'react-redux';
let scrollWindow;
let scrollHeight;
import {Background, Input} from './common';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onMessageChange(text){
        let id = this.props.id;
        console.log(id);
        this.props.messageTyping({text, id});
    }

    render(){
        return(
            <Background source={require('../../assets/back_reverse.png')} behavior="padding" style={styles.container}>
                <ScrollView style={styles.bubbleContainer}
                            ref={scrollview => { scrollWindow = scrollview }}
                            onLayout={event => {
                                  scrollHeight = event.nativeEvent.layout.height
                                }}
                            onContentSizeChange={(width, height) => {
                                    if (scrollHeight < height) {
                                      scrollWindow.scrollTo({ y: height - scrollHeight })
                                    }
                                }}
                >

                </ScrollView>
                <View style={styles.messageBoxContainer}>
                    <Input
                        style={styles.messageBox}
                        onChangeText={this.onMessageChange.bind(this)}
                        value={this.props.text}
                        returnKeyType="send"
                        placeholder="Type Message..."
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity

                    >
                        <Text style={styles.sendButton}>Send</Text>
                    </TouchableOpacity>
                </View>

            </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    bubbleContainer: {
        flex: 1,
    },
    messageBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#00a0ff',
        backgroundColor: '#00a0ff',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    messageBox: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00a0ff',
        backgroundColor: '#00a0ff',
        paddingHorizontal: 5,
        color: '#fff'
    },
    sendButton: {
        color: 'blue',
        marginLeft: 10,
        marginRight: 5,
        fontSize: 16,
        fontWeight: '500',
    }
});

const mapStateToProps = ({message, auth}) => {
    const {text} = message;
    const {id} = auth;
    console.log(auth.id);
    console.log('1222222222222222222222')
    return {text, id}
}

export default connect(mapStateToProps,{messageTyping})(Home);
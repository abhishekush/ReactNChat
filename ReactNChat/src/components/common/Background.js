import React from 'react';
import {
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

const Background = (props) => {
    return(
        <Image source = {props.source} behavior={props.behavior} style={[styles.backImage,props.style]}>
            {props.children}
        </Image>
    )
}

const styles = StyleSheet.create({
    backImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
})

export {Background}
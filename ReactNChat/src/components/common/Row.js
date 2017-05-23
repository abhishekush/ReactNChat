import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';



const Row = (props) => {
    return (
        <View animation={props.animation} style={[styles.container,props.style]} duration = {props.duration} iterationCount={props.iterationCount}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(25,25,25,0.0)',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',

        borderBottomWidth: 0,
    }
})

export {Row}
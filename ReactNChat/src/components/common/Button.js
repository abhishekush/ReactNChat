import React from 'react';
import { Text, TouchableOpacity,View, Image } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={styles.textBody}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
      </View>
      <View style={styles.imgBody}>
        <Image
            style={styles.arrow}
            source={require('../../../assets/arrow.png')}
            resizeMode="contain"
        />
      </View>
    </TouchableOpacity>

  );
};
const styles = {
    textBody: {
        alignSelf: 'flex-start',

        justifyContent:'center'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#00a0ff',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 40,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textStyle:{
        color: '#fff',
        fontSize: 19,
        fontWeight: '600',
        paddingTop: 14,
        paddingBottom: 10,
        flex: 0.5,
        fontFamily: 'karla_regular'
    },
    arrow:{

        width: 40,
        height: 5,
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 35


    },
    imgBody:{
        alignSelf: 'flex-end',
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 20
    }
};

export { Button };

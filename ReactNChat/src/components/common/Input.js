import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label,underlineColorAndroid, value, onChangeText, placeholder, secureTextEntry,style,onBlur,onFocus, returnKeyType, placeholderTextColor }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

  return (
      <View style={containerStyle}>
          <TextInput
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              autoCorrect={false}
              style={[inputStyle,style]}
              value={value}
              onChangeText={onChangeText}
              underlineColorAndroid={underlineColorAndroid}
              onBlur={onBlur}
              onFocus={onFocus}
              returnKeyType={returnKeyType}
              placeholderTextColor={placeholderTextColor}
          />
      </View>
  );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        fontFamily: 'karla_regular'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color: '#000'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 0
    }
};

export { Input };

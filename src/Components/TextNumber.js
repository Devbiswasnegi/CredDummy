import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { forwardRef } from 'react';
import { vh } from '../Util/dimensions';

const TextNumber = props => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: '#202427',
        //   borderColor: 'white',
        //   borderWidth: 1,
          paddingVertical:vh(12),
          fontSize:28,
          fontWeight:"bold",
        color:"white"
         
        }}
        placeholder={props.placeholder}
        placeholderTextColor= '#33373A'
        keyboardType="numeric"      
        maxLength={props.maxLength}
        />
    </View>
  );
};

export default TextNumber;

const styles = StyleSheet.create({});

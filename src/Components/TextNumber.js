import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { forwardRef } from 'react';

const TextNumber = props => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: '#202427',
        //   borderColor: 'white',
        //   borderWidth: 1,
          height:40,
          fontSize:28,
          fontWeight:"bold",
        color:"white"
         
        }}
        placeholder={props.placeholder}
        placeholderTextColor= '#33373A'
      />
    </View>
  );
};

export default TextNumber;

const styles = StyleSheet.create({});

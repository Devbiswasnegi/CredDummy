import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../Util/dimensions';

const BlackButton = props => {
  return (
    <View
    // style={{alignItems:"center",justifyContent:"center"}}
    >
      <TouchableOpacity 
      onPress={props.onpress}
        style={{
          width: vw(100),
          height: vh(35),
          alignItems: 'center',
          borderRadius: vw(20),
          backgroundColor: 'black',
          justifyContent: 'center',
          
        }}>
        <Text style={{color: 'white', fontSize: vw(12),fontWeight:"bold"}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlackButton;

const styles = StyleSheet.create({});

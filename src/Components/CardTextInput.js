import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../Util/dimensions';

const CardTextInput = props => {
  console.log("input")
  // const inputRef=React.useRef()
  return (
    <View style={{}}>
      <TextInput
        ref={props.inputRef}
        placeholder="_ _ _ _"
        style={{
          paddingVertical: vh(20),
          //   borderWidth: 1,
          width: vw(70),
          fontSize: vw(20),
          letterSpacing: 1,
        }}

        onChangeText={props.onChangeText}
        maxLength={4}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

export default CardTextInput;

const styles = StyleSheet.create({});

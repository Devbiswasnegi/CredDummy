import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../Util/dimensions';

const CardTextInput = () => {
  return (
    <View>
      <TextInput
        placeholder="_ _ _ _"
        style={{
          paddingVertical: vh(20),
        //   borderWidth: 1,
          width: vw(70),
          fontSize: vw(20),
          letterSpacing: 1,

        }}
        maxLength={4}
      />
    </View>
  );
};

export default CardTextInput;

const styles = StyleSheet.create({});

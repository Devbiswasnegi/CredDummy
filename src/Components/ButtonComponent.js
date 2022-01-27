import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../Util/dimensions';
import LinearGradient from 'react-native-linear-gradient';

const ButtonComponent = (props) => {
  return (
    <View  style={{
      width: vw(200),
      height: vh(45),
      // borderWidth: 1,
      // borderColor: 'white',
      // borderRadius: vw(25),
      shadowColor: 'white',
      shadowOffset: {
        width: -4,
        height: -5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,elevation:5

    }}>
       <View style={{
      width: vw(200),
      height: vh(45),
      // borderWidth: 1,
      // borderColor: 'white',
      // borderRadius: vw(25),
      shadowColor: 'black',
      shadowOffset: {
        width: 5,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 15,elevation:5

    }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          
        }} onPress={props.onPress}>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.6, y: 1.0}}
          // locations={[0, 0.5, 0.6]}
          colors={['#1C2020', '#292D2E']}
          style={{
            width: vw(200),
            height: vh(45),
            // borderWidth: 1,
            // borderColor: 'white',
            opacity:props.opacity?1:0.5,
            borderRadius: vw(25),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // color: '#E6C6B1',
              color:"#D9896A",
              fontWeight: 'bold',
              letterSpacing: 0.8,
              fontSize: vw(14),
              // opacity:0.6
            }}>
            Agree & continue
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {vw, vh} from '../Util/dimensions';
import {localImages} from '../Util/LocalImages';
import LinearGradient from 'react-native-linear-gradient';

const BackButton = props => {
  // console.log('backButton props', props);
  return (
    <View
      style={{
        width: vw(50),
        height: vh(50),
        // borderWidth: 1,
        // borderColor: 'white',
        // borderRadius: vw(25),
        shadowColor: 'white',
        shadowOffset: {
          width: -4,
          height: -5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{
          width: vw(50),
          height: vw(50),
          borderWidth: 1,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: vw(25),
          shadowColor: 'white',
          shadowOffset: {
            width: -5,
            height: -5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          //   position:"absolute",opacity:0.5
        }}>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.6, y: 1.0}}
          // locations={[0, 0.5, 0.6]}
          colors={['#1C2020', '#292D2E']}
          style={{
            width: vw(50),
            height: vh(50),
            // borderWidth: 1,
            // borderColor: 'white',
            borderRadius: vw(25),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={localImages.leftAngle}
            style={{height: vw(15), width: vw(15)}}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

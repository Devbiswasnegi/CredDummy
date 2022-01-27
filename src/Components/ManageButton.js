import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../Util/dimensions';
import LinearGradient from 'react-native-linear-gradient';

const ManageButton = (props) => {
  return (
    <View  style={{
      width: vw(140),
      height: vh(45),
    //   position:"absolute",
       opacity:0.8,
    //   borderWidth: 1,
    //   borderColor: 'white',
    //   borderRadius: vw(25),
      shadowColor: 'white',
      shadowOffset: {
        width: -5,
        height: -5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation:1

    }}>
        <View style={{
      width: vw(140),
      height: vh(45),
      // borderWidth: 1,
      // borderColor: 'white',
      // borderRadius: vw(25),
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation:1
    }}>
      <TouchableOpacity onPress={props.grantPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          
        }}>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.6, y: 1.0}}
          // locations={[0, 0.5, 0.6]}
        //   angle={145}
          colors={['#1C2020', '#292D2E']}
          style={{
            width: vw(140),
            height: vh(45),
            // borderWidth: 1,
            // borderColor: 'white',
            opacity:0.7,
            borderRadius: vw(25),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 0.8,
              fontSize: vw(14),
              // opacity:0.6
            }}>
           Manage
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageButton;

const styles = StyleSheet.create({});

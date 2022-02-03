import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React from 'react';
import { vh, vw } from '../Util/dimensions';
import LinearGradient from 'react-native-linear-gradient';

const SmallBlueButton = (props) => {
  return (
    <View
        style={{
          width: vw(140),
          height: vh(50),
          borderRadius: vw(30),
          //   borderWidth: 1,
          borderColor: '#202427',
          borderColor: 'white',
          shadowColor: '#FFFFFF50',
          shadowOffset: {
            width: -4,
            height: -5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 8,

        //   marginTop: vh(30),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#202427',
        }}>
        <LinearGradient
          colors={['#385EA7', '#2E4E97']}
          style={{width: vw(130), height: vh(40), borderRadius: vw(26)}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity onPress={props.continue}
            style={{
              // borderWidth: 4,
              // borderColor: '#202427',
              width: vw(130),
              height: vh(40),
              borderRadius: vw(26),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            // onPress={() => props.navigation.navigate('ContactNumber')}
            >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 0.8,
                fontSize: vw(14),
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
  );
};

export default SmallBlueButton;

const styles = StyleSheet.create({});

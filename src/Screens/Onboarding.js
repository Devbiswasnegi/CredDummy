import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vw, vh} from '../Util/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {localImages} from '../Util/LocalImages';

const Onboarding = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#202427',
        flex: 1,
        alignItems: 'center',
        // justifyContent:"center"
      }}>
      <View
        style={{
            // borderWidth: 1,
            // borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: vh(80),
        }}>
        <Image
          source={localImages.CircleCard}
          style={{flex: 0.7}}
          resizeMode="contain"
        />

        <Image
          source={localImages.cardFrame}
          style={{position: 'absolute', flex: 0.3}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          color: '#CDCDCD',
          fontWeight: 'bold',
          fontSize: vw(22),
          letterSpacing: 0.5,
          width: vw(250),
          textAlign: 'center',
        }}>
        pay your credit card bills. win rewards.
      </Text>

      <View
        style={{
          width: vw(310),
          height: vh(55),
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

          marginTop: vh(30),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#202427',
        }}>
        <LinearGradient
          colors={['#385EA7', '#2E4E97']}
          style={{width: vw(300), height: vh(45), borderRadius: vw(26)}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            style={{
              // borderWidth: 4,
              // borderColor: '#202427',
              width: vw(300),
              height: vh(45),
              borderRadius: vw(26),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => props.navigation.navigate('ContactNumber')}>
            <Text
              style={{
                color: '#E6C6B1',
                fontWeight: 'bold',
                letterSpacing: 0.8,
                fontSize: vw(16),
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vh, vw} from '../../Util/dimensions';
import TextNumber from '../../Components/TextNumber';
import ButtonComponent from '../../Components/ButtonComponent';

const ContactNumber = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202427'}}>
      <View style={{marginLeft: vw(24), marginTop: vh(30)}}>
        <Text
          style={{
            color: '#CDCDCD',
            fontWeight: 'bold',
            fontSize: vw(18),
            letterSpacing: 1.5,
            width: vw(150),
            lineHeight: vh(25),
          }}>
          give us your mobile number
        </Text>

        <Text
          style={{
            color: '#55575A',

            //   fontSize: vw(18),
            letterSpacing: 1.5,
            width: vw(300),
            marginTop: vh(7),
          }}>
          to apply, we need your mobile number linked to your
        </Text>

        <View style={{paddingVertical: vh(20)}}>
          <TextNumber placeholder={'9999999999'} />
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'white',
            height: vw(28),
            width: vw(28),
            borderRadius: vw(6),
            marginTop: vh(200),
            marginBottom: vh(25),
            backgroundColor: '#282828',
            opacity: 0.5,
          }}></TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            //    borderWidth: 1, borderColor: 'white'
          }}>
          <Text
            style={{
              color: '#55575A',

              fontSize: vw(12),
              letterSpacing: 1,
              width: vw(300),
              // marginTop: vh(7),
            }}>
            you agree to allow CRED to check your credit information with
          </Text>
          <TouchableOpacity
            style={{
              //   borderWidth: 1,
              //   borderColor: 'white',
              position: 'absolute',
              bottom: 0,
              left: 115,
            }}>
            <Text
              style={{
                color: 'white',
                opacity: 0.5,
                fontSize: vw(12),
                letterSpacing: 1,
                // width: vw(300),
                // marginTop: vh(7),
                textDecorationLine: 'underline',
                alignSelf: 'center',
              }}>
              RBI approved credit bureaus.
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#55575A',

            fontSize: vw(12),
            letterSpacing: 1,
            width: vw(300),
            marginTop: vh(7),
          }}>
          we need to check if you are a credit card holder and are above our
          accepted credit score threshold. it will not impact your credit score.
        </Text>

        <View style={{marginTop: vh(40)}}>
          <ButtonComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactNumber;

const styles = StyleSheet.create({});

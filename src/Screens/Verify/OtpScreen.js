import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {vh, vw} from '../../Util/dimensions';
import TextNumber from '../../Components/TextNumber';

import BackButton from '../../Components/BackButton';
import ButtonComponent from '../../Components/ButtonComponent';
import {useSelector} from 'react-redux';
import {login} from './startReducer';
import {useDispatch} from 'react-redux'
import { otp } from './action';

const OtpScreen = props => {
  // console.log("optProp",props)
  const dispatch=useDispatch();
  const [otpNumber, setOtpNumber] = useState("");
  const {loginNo} = useSelector(state => state.login);
  console.log('loginNo', loginNo);
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{marginLeft: vw(15)}}>
        <BackButton {...props} />
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.wehave}>we have sent you an OTP</Text>

        <Text style={styles.otpnumber}>
          {`enter your 4 digit OTP sent on ${loginNo} to proceed`}
        </Text>
        <View style={styles.input}>
          <TextNumber
            placeholder={'9999'}
            maxLength={4}
            onChangeText={text => setOtpNumber(text)}
          />
        </View>
        <View style={{marginTop: vh(300)}}>
          <ButtonComponent
            onPress={() => {
              otpNumber!=="" && `${otpNumber}`.length==4 ?
              props.navigation.navigate('EnterName')
               : null;

               dispatch(otp(otpNumber))
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#202427',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: -vh(100),
  },
  viewTwo: {
    marginLeft: vw(35),
    marginTop: vh(25),
  },
  wehave: {
    color: '#CDCDCD',
    fontWeight: 'bold',
    fontSize: vw(18),
    letterSpacing: 1.5,
    width: vw(180),
    lineHeight: vh(25),
    paddingVertical: vh(10),
  },
  otpnumber: {
    color: '#55575A',

    //   fontSize: vw(18),
    letterSpacing: 1.5,
    width: vw(300),
    marginTop: vh(7),
  },
  input: {
    paddingVertical: vh(20),
  },
});

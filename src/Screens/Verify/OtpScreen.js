import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {vh, vw} from '../../Util/dimensions';
import TextNumber from '../../Components/TextNumber';

import BackButton from '../../Components/BackButton';
import ButtonComponent from '../../Components/ButtonComponent';

const OtpScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{marginLeft: vw(15)}}>
        <BackButton
        {...props}
        />
      </View>
      <View style={{marginLeft: vw(35), marginTop: vh(25)}}>
        <Text
          style={{
            color: '#CDCDCD',
            fontWeight: 'bold',
            fontSize: vw(18),
            letterSpacing: 1.5,
            width: vw(180),
            lineHeight: vh(25),
            paddingVertical: vh(10),
          }}>
          we have sent you an OTP
        </Text>

        <Text
          style={{
            color: '#55575A',

            //   fontSize: vw(18),
            letterSpacing: 1.5,
            width: vw(300),
            marginTop: vh(7),
          }}>
          enter your 4 digit OTP sent on 880034936 to proceed
        </Text>
        <View style={{paddingVertical: vh(20)}}>
          <TextNumber placeholder={'9999'} maxLength={4} />
        </View>
        <View style={{marginTop: vh(300)}}>
          <ButtonComponent 
          
          onPress={()=>props.navigation.navigate("GrantPermission")}/>
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
});

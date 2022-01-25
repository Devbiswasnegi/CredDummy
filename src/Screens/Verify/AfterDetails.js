import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { vh, vw } from '../../Util/dimensions';
// import {vh, vw} from '../Util/dimensions';

const AfterDetails = (props) => {

    // useEffect(()=>{
    //     setTimeout(() => {
    //         props.navigation.navigate("Onboarding")
    //     }, 2500);
    // })
  return (
    <SafeAreaView style={styles.mainView}>
        <View style={{marginTop:vh(80)}}>
        <Text
        style={{
          color: '#CDCDCD',
          fontWeight: 'bold',
          fontSize: vw(22),
          letterSpacing: 0.5,
          width: vw(280),
          textAlign: 'center',
          lineHeight:vh(35)
        }}>
        welcome to CRED. syncing your credit cards
      </Text>
      <Image
        source={require('../../assets/Gif/afterDetail.gif')}
        style={styles.credLogo}
      />
      </View>
    </SafeAreaView>
  );
};

export default AfterDetails;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#202427',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop:vhh
   
  },
  credLogo: {
    width: vw(250),
    height: vw(250),
    alignSelf:"center",marginTop:vh(50)
  },
  credText: {
    color: 'white',
    fontSize: vw(50),
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: -vh(100),
  },
});

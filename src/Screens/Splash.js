import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {vh, vw} from '../Util/dimensions';

const Splash = (props) => {

    // useEffect(()=>{
    //     setTimeout(() => {
    //         props.navigation.navigate("Onboarding")
    //     }, 2500);
    // })
  return (
    <SafeAreaView style={styles.mainView}>
      <Image
     
        source={require('../assets/Gif/credlogo.gif')}
        // source={require('../assets/Gif/afterDetail.gif')}
        style={styles.credLogo}
      ></Image>
      <Text style={styles.credText}>CRED</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#202427',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -vh(100),
  },
  credLogo: {
    width: vw(300),
    height: vw(300),
  },
  credText: {
    color: 'white',
    fontSize: vw(50),
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: -vh(100),
  },
});

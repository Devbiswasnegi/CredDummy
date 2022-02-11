import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,Animated
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {screenWidth, vh, vw} from '../../Util/dimensions';
import PermissionComp from '../../Components/PermissionComp';
import {localImages} from '../../Util/LocalImages';
import ButtonTrue from '../../Components/ButtonTrue';

const GrantPermission = props => {

  // const AnimatedPermissionGranted =Animated.createAnimatedComponent()
  const [deny,setDeny]=useState(false)

  // console.log("grantpermission",props)
  // const [change,setChange]=useState(false)
  const [val,setVal]=useState(false)
  // const shake = useRef(new Animated.Value(0)).current;
  const onPress=()=>{
  //   Animated.timing(shake, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();  
  setDeny(!deny)

  }
  useEffect(()=>{
    console.log('props.deny parent',props.deny);
  },[])


    // const spin = shake.interpolate({
    //   inputRange: [0, 0.2, 0.4, 0.6, 1],
    //   outputRange: ['0deg', '30deg', '0deg', '-30deg', '0deg'],
    // });
  return (
    <SafeAreaView style={styles.mainSafe}>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.touchDeny} onPress={onPress}>
          <Text style={styles.denyText}>Deny permission</Text>
        </TouchableOpacity>

        <Text style={styles.permissionText}>
          we take the following permission
        </Text>

        <PermissionComp
        deny={deny}
        // spin={spin}
          Img={localImages.mobile}
          heading={'phone state permission'}
          discription="we need this permission to ensure the SIM card in your phone and your
       registered phone number match. please grant permission to continue"
        />

        <View style={styles.line}></View>
        <PermissionComp
       deny={deny}
          Img={localImages.sms}
          heading={'sms permission'}
          discription="we need this permission to activate UPI and send credit card payment remainders to provide a seamless experience "
        />
        <View style={styles.line}></View>
        <PermissionComp
     deny={deny}
          Img={localImages.location}
          heading={'location permission'}
          discription="we need this permission ti intelligently surface location specific rewards and alerts"
        />
        <View style={{marginTop: vh(100)}}>
          <ButtonTrue
            grantPress={() => {
              props.navigation.navigate('CardDetailsStartModal');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GrantPermission;

const styles = StyleSheet.create({
  mainSafe: {
    flex: 1,
    backgroundColor: '#202427',
  },
  mainView: {
    marginLeft: vw(24),
    marginTop: vh(20),
  },
  touchDeny: {
    width: vw(100),
    marginLeft: screenWidth - vw(150),
    borderBottomWidth: 1,
    borderColor: 'white',
    borderStyle: 'dotted',
  },
  denyText: {
    color: '#CDCDCD',
    letterSpacing: 0.5,
    //   borderWidth:1,borderColor:"white",
    fontSize: vw(11),
    marginTop: vh(2),
    lineHeight: vh(16),

    //   textDecorationLine:"underline"
  },
  permissionText: {
    color: '#CDCDCD',
    fontWeight: 'bold',
    fontSize: vw(18),
    letterSpacing: 1.5,
    width: vw(210),
    lineHeight: vh(25),
    marginTop: vh(20),
    marginBottom: vh(40),
  },
  line: {
    borderWidth: 0.7,
    borderColor: 'white',
    marginVertical: vh(30),
    borderBottomLeftRadius: 20,
    width: vw(300),
    opacity: 0.5,
  },
});

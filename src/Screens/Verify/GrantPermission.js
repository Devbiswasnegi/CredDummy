import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../../Util/dimensions';
import PermissionComp from '../../Components/PermissionComp';
import {localImages} from '../../Util/LocalImages';
import ButtonTrue from '../../Components/ButtonTrue';

const GrantPermission = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202427'}}>
      <View style={{marginLeft: vw(24), marginTop: vh(20)}}>
           
        <TouchableOpacity style={{ width: vw(100),
              marginLeft: screenWidth - vw(150),borderBottomWidth:1,borderColor:"white",borderStyle:"dotted"}}>
          <Text
            style={{
              color: '#CDCDCD',
              letterSpacing: 0.5,
              //   borderWidth:1,borderColor:"white",
              fontSize: vw(11),
              marginTop: vh(2),
              lineHeight: vh(16),
             
            //   textDecorationLine:"underline"
            }}>
            Deny permission
          </Text>
        </TouchableOpacity>
         
        <Text
          style={{
            color: '#CDCDCD',
            fontWeight: 'bold',
            fontSize: vw(18),
            letterSpacing: 1.5,
            width: vw(210),
            lineHeight: vh(25),
            marginTop: vh(20),
            marginBottom:vh(40)
          }}>
          we take the following permission
        </Text>

        <PermissionComp
          Img={localImages.mobile}
          heading={'phone state permission'}
          discription="we need this permission to ensure the SIM card in your phone and your
       registered phone number match. please grant permission to continue"
        />

        <View style={{borderWidth: 1, borderColor: 'white',marginVertical:vh(30),borderBottomLeftRadius:20,width:300}}></View>
        <PermissionComp
          Img={localImages.sms}
          heading={'sms permission'}
          discription="we need this permission to activate UPI and send credit card payment remainders to provide a seamless experience "
        />
        <View style={{borderWidth: 1, borderColor: 'white',marginVertical:vh(30),width:300}}></View>
        <PermissionComp
          Img={localImages.location}
          heading={'location permission'}
          discription="we need this permission ti intelligently surface location specific rewards and alerts"
        />
        <View style={{marginTop:vh(100)}}>
      <ButtonTrue/>
      </View>
      </View>

    </SafeAreaView>
  );
};

export default GrantPermission;

const styles = StyleSheet.create({});

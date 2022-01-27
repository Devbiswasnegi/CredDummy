import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {vh, vw} from '../../Util/dimensions';
import TextNumber from '../../Components/TextNumber';
import ButtonComponent from '../../Components/ButtonComponent';
import {localImages} from '../../Util/LocalImages';
import {useDispatch } from 'react-redux'
import { loginNumber } from './action';

const ContactNumber = props => {
  const [check, setCheck] = useState(false);
  const [number, setNumber] = useState("");
  const dispatch=useDispatch()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202427'}}>
      <View style={{marginLeft: vw(24), marginTop: vh(30)}}>
        <Text style={styles.giveUs}>give us your mobile number</Text>

        <Text style={styles.toApply}>
          to apply, we need your mobile number linked to your
        </Text>

        <View style={{paddingVertical: vh(20)}}>
          <TextNumber
            placeholder={'9999999999'}
            maxLength={10}
            onChangeText={text => {setNumber(text)
            
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setCheck(!check);
          }}
          style={styles.check}>
          {check ? (
            <Image
              source={localImages.Check}
              style={{width: vw(16), height: vw(16)}}
            />
          ) : null}
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            //    borderWidth: 1, borderColor: 'white'
          }}>
          <Text style={styles.afterCheck}>
            you agree to allow CRED to check your credit information with
          </Text>
          <TouchableOpacity style={styles.RBItouch}>
            <Text style={styles.RBI}>RBI approved credit bureaus.</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={styles.weneed}>
          we need to check if you are a credit card holder and are above our
          accepted credit score threshold. it will not impact your credit score.
        </Text>

        <View style={{marginTop: vh(40)}}>
          <ButtonComponent
            onPress={() => {
              check && number !== '' && `${number}`.length==10
                ? props.navigation.navigate('OtpScreen', {number: number})
                : null;

                dispatch(
                  loginNumber(number)
                  )
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactNumber;

const styles = StyleSheet.create({
  giveUs: {
    color: '#CDCDCD',
    fontWeight: 'bold',
    fontSize: vw(18),
    letterSpacing: 1.5,
    width: vw(150),
    lineHeight: vh(25),
  },
  toApply: {
    color: '#55575A',

    //   fontSize: vw(18),
    letterSpacing: 1.5,
    width: vw(300),
    marginTop: vh(7),
  },
  check: {
    borderWidth: 1,
    borderColor: 'white',
    height: vw(28),
    width: vw(28),
    borderRadius: vw(6),
    marginTop: vh(200),
    marginBottom: vh(25),
    backgroundColor: '#282828',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  afterCheck: {
    color: '#55575A',

    fontSize: vw(12),
    letterSpacing: 1,
    width: vw(300),
    // marginTop: vh(7),
  },
  RBI: {
    color: 'white',
    opacity: 0.5,
    fontSize: vw(12),
    letterSpacing: 1,
    // width: vw(300),
    // marginTop: vh(7),
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  RBItouch: {
    //   borderWidth: 1,
    //   borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 115,
  },
  weneed:{
    color: '#55575A',

    fontSize: vw(12),
    letterSpacing: 1,
    width: vw(300),
    marginTop: vh(7),
  }
});

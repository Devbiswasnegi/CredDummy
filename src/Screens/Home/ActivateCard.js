import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import BlackButton from '../../Components/BlackButton';
import {screenWidth, vh, vw} from '../../Util/dimensions';

const ActivateCard = props => {
  return (
    <View style={[styles.mainView, {backgroundColor: props.backgroundColor}]}>
      <Text style={styles.heading}>{props.heading}</Text>
      <View style={styles.ViewOne}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.ViewThird}>
            <Image
              source={require('../../assets/Icons/creditCardPink.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Text style={styles.bankname}>{props.BankName}</Text>
            <Text>{props.CardNumber}</Text>
         
          </View>
        </View>
        <View>
          
          <BlackButton text="Activate card" />
        </View>
      </View>
    </View>
  );
};

export default ActivateCard;

const styles = StyleSheet.create({
  mainView: {
    width: screenWidth - vw(40),
    borderWidth: 1,
    padding: vw(20),

    borderRadius: vw(20),
    height: vw(180),
    marginVertical: vh(10),
  },
  heading: {
    fontSize: vw(14),
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: vh(13),
    lineHeight:20
  },
  ViewOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(50),
  },
  ViewThird: {
    width: vw(35),
    height: vw(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: vw(8),
    marginRight: vw(10),
  },
  logo: {width: vw(20), height: vw(20)},
  bankname: {fontWeight: '500'},

  due: {
    marginTop: vh(20),
    color: 'red',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  amount: {
    textAlign: 'right',
    color: 'black',
    fontSize: vw(16),
    fontWeight: 'bold',
    marginBottom: vh(20),
  },
});

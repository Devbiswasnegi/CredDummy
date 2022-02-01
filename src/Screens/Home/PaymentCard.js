import {StyleSheet, Text, View, Image, Animated, PanResponder} from 'react-native';
import React, { useRef } from 'react';
import BlackButton from '../../Components/BlackButton';
import {screenWidth, vh, vw} from '../../Util/dimensions';

const PaymentCard = props => {
  const slide = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderMove: (e, gestureState) => {
      //   // console.log('gestureState', gestureState);
       
      // },
      
      onPanResponderMove: Animated.event([null, {dx: slide.x, dy: slide.y}], {
        
      }),
      onPanResponderRelease: () => {
        Animated.spring(slide, {toValue: {x: 0, y: 0},useNativeDriver: true,}).start();
      },
    }),
  ).current;
  return (
    <Animated.View {...panResponder.panHandlers} style={[styles.mainView, {backgroundColor: props.backgroundColor,transform:[{translateX:slide.x}]}]}>
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
            <Text style={styles.due}>DUE IN {props.Days} DAYS</Text>
          </View>
        </View>
        <View>
          <Text style={styles.amount}>₹{props.Amount}</Text>
          <BlackButton text="Pay now" />
        </View>
      </View>
    </Animated.View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  mainView: {
    width: screenWidth - vw(40),
    borderWidth: 1,
     paddingTop: vw(20),
paddingHorizontal:vw(20),
    borderRadius: vw(20),
    height: vw(190),
    marginVertical: vh(10),
  },
  heading: {
    fontSize: vw(14),
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: vh(13),
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

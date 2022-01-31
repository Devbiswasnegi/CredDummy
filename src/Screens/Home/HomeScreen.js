import {
  Animated,
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
  PanResponder,
} from 'react-native';
import React, {useRef} from 'react';
import {screenWidth, vh, vw} from '../../Util/dimensions';
import CashBack from './CashBack';
import PaymentCard from './PaymentCard';
import ActivateCard from './ActivateCard';
import {useSelector} from 'react-redux';
import {panNumberEnter} from '../Verify/action';

const HomeScreen = () => {
  const slide = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        console.log('gestureState', gestureState);
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: slide.x._value,
          y: slide.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: slide.x, dy: slide.y}], {
        useNativeDriver: true,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  );

  // const {name} = useSelector(state => state.login);
  // console.log('name', name);
  return (
    <SafeAreaView style={styles.mainView}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          height: 100,
          width: 200,
          borderColor: 'white',
          borderWidth: 1,
          transform: [{translateX: slide.x}, {translateY: slide.y}],
          // transform:[{
          //   translate:slide.x

          // }]
        }}></Animated.View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ViewOne}>
          <Text style={styles.nameText}>hello, {name}</Text>
          <Text style={styles.rec}>
            here are today's recommended actions for you
          </Text>

          <CashBack
            context="make your payment now and win assured cashback"
            heading="claim your cashback now!"
            Img={require('../../assets/Icons/debit-card.png')}
            backgroundColor="yellow"
          />

          <PaymentCard
            heading="clear your upcoming bills to earn coins"
            BankName="Axis Bank"
            CardNumber="xxxx 2312"
            Days="10"
            Amount="13432"
            backgroundColor="white"
          />
          <ActivateCard
            heading="activate your card to make your first payment and earn coins"
            backgroundColor="white"
            BankName="ICICI Bank"
            CardNumber="xxxx 2312"
          />

          <PaymentCard
            heading="clear your upcoming bills to earn coins"
            BankName="Axis Bank"
            CardNumber="xxxx 2312"
            Days="10"
            Amount="13432"
            backgroundColor="white"
          />

          <PaymentCard
            heading="clear your upcoming bills to earn coins"
            BankName="Axis Bank"
            CardNumber="xxxx 2312"
            Days="10"
            Amount="13432"
            backgroundColor="white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#202427',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: -vh(100),
  },
  ViewOne: {
    width: screenWidth - vw(40),
    alignSelf: 'center',
    marginBottom: vh(30),
  },
  nameText: {
    color: 'white',
    fontSize: vw(25),
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: vh(10),
  },
  rec: {
    color: 'white',
    fontSize: vw(14),
    letterSpacing: 0.5,
    lineHeight: vh(20),
    width: vw(210),
    marginBottom: vh(20),
  },
});

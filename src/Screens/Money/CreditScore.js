import {StyleSheet, Text, TouchableOpacity, View, Easing} from 'react-native';
import React, {createRef, useRef} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {vh, vw} from '../../Util/dimensions';
import LottieView from 'lottie-react-native';
import { useState } from 'react';

const CreditScore = () => {
  const [lottieOn,setLottieOn]=useState(false)
  let circularProgress;

  const filled = 0;
  const number = 94;

  return (
    <View style={styles.mainView}>
      <View style={styles.oneView}>
        <Text style={styles.all}>all about your credit score</Text>
        <Text style={styles.get}>
          get insights and track your credit standing
        </Text>
      </View>
      <View style={styles.secView}>
        <View style={styles.shadowSecView}>
          <View style={styles.insideView}>
            <AnimatedCircularProgress
              //   ref={circleRef}
              ref={ref => {
                circularProgress = ref;

                //   console.log('ref', circularProgress);
              }}
              size={100}
              width={15}
              fill={filled}
              tintColor="#00e0ff"
              // onAnimationComplete={() =>

              // }
              backgroundColor="#3d5875">
              {filled => (
                <Text style={styles.roundText}>{Math.floor(filled)}%</Text>
              )}
            </AnimatedCircularProgress>

            <View style={{marginLeft: vw(20)}}>
              <Text style={styles.good}>GOOD</Text>
              <Text style={styles.review}>review activity on your 2 cards</Text>

              <TouchableOpacity
                onPress={() => {
                  circularProgress.animate(number, 8000, Easing.quad);
                  setTimeout(() => {
                    setLottieOn(true)
                  },8500);
                }}
                style={styles.btn}>
                <Text style={styles.btnText}>View report</Text>
              </TouchableOpacity>

             
            </View>
          </View>

          <Text style={styles.score}>CREDIT SCORE REFRESH AVAILABLE</Text>
        </View>
      </View>

     
              {lottieOn &&  setTimeout(() => {
                    setLottieOn(false)
                  },5000)
                 &&
              <LottieView
                        source={require("../../assets/lottie/83563-confetti-lottie-animation.json")}
                        autoPlay
                        loop
                      />
              }
    </View>
  );
};

export default CreditScore;

const styles = StyleSheet.create({
  mainView: {backgroundColor: '#202427', flex: 1, opacity: 1},
  oneView: {marginVertical: vh(20)},
  all: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: vw(20),
    opacity: 0.8,
  },
  get: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: vw(16),
    marginTop: vh(10),
    opacity: 0.4,
  },
  secView: {
    // borderWidth: 1,
    // flexDirection: 'row',
    height: vh(220),
    width: vw(340),
    borderRadius: vw(14),
    alignSelf: 'center',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowColor: '#3F4549',
    shadowRadius: 7,
    shadowOpacity: 1,
    backgroundColor: '#202427',

    // alignItems:"center",justifyContent:"center"
  },

  shadowSecView: {
    // borderWidth: 1,
    // flexDirection: 'row',
    height: vh(220),
    width: vw(340),
    borderRadius: vw(14),
    alignSelf: 'center',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: 'black',
    shadowRadius: 7,
    shadowOpacity: 1,
    backgroundColor: '#202427',

    // alignItems:"center",justifyContent:"center"
  },
  insideView: {
    // borderWidth: 1,
    flexDirection: 'row',
    height: vh(180),
    width: vw(340),
    borderRadius: vw(14),
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: 'black',
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  roundText: {
    fontWeight: 'bold',
    fontSize: vw(20),
    color: 'white',
  },
  good: {
    color: 'green',
    fontWeight: '900',
    fontSize: vw(12),
  },
  review: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: vw(12),
    width: vw(160),
    lineHeight: vh(20),
    marginVertical: vh(15),
  },
  btn: {
    width: vw(100),
    height: vh(35),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(20),
    backgroundColor: 'lightblue',
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: vw(12),
  },
  score: {
    color: 'white',
    fontWeight: '600',
    opacity: 0.7,
    textAlign: 'center',
    marginVertical: vh(10),
  },
});

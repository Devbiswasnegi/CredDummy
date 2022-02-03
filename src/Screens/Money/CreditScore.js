import {StyleSheet, Text, TouchableOpacity, View, Easing} from 'react-native';
import React, {createRef, useRef} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {vh, vw} from '../../Util/dimensions';

const CreditScore = () => {
  let circularProgress;

  const filled = 0;
  const number = 94;

  return (
    <View style={{backgroundColor: '#202427', flex: 1, opacity: 1}}>
      <View style={{marginVertical: vh(20)}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: vw(20),
            opacity: 0.8,
          }}>
          all about your credit score
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: vw(16),
            marginTop: vh(10),
            opacity: 0.4,
          }}>
          get insights and track your credit standing
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          // flexDirection: 'row',
          height: vh(220),
          width: vw(340),
          borderRadius: vw(14),
          alignSelf: 'center',
          // alignItems:"center",justifyContent:"center"
        }}>
        <View
          style={{
            borderWidth: 1,
            flexDirection: 'row',
            height: vh(180),
            width: vw(340),
            borderRadius: vw(14),
            // alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
              <Text
                style={{fontWeight: 'bold', fontSize: vw(20), color: 'white'}}>
                {Math.floor(filled)}%
              </Text>
            )}
          </AnimatedCircularProgress>

          <View style={{marginLeft: vw(20)}}>
            <Text style={{color: 'green', fontWeight: '900', fontSize: vw(12)}}>
              GOOD
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: vw(12),
                width: vw(160),
                lineHeight: vh(20),
                marginVertical: vh(15),
              }}>
              review activity on your 2 cards
            </Text>

            <TouchableOpacity
              onPress={() => {
                circularProgress.animate(number, 8000, Easing.quad);
              }}
              style={{
                width: vw(100),
                height: vh(35),
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: vw(20),
                backgroundColor: 'lightblue',
              }}>
              <Text
                style={{color: 'white', fontWeight: 'bold', fontSize: vw(12)}}>
                View report
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            opacity: 0.7,
            textAlign: 'center',
            marginVertical: vh(10),
          }}>
          CREDIT SCORE REFRESH AVAILABLE
        </Text>
      </View>
    </View>
  );
};

export default CreditScore;

const styles = StyleSheet.create({});

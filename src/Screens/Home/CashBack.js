import {StyleSheet, Text, View, Image, Animated, PanResponder, TouchableOpacity} from 'react-native';
import React, { useRef } from 'react';
import BlackButton from '../../Components/BlackButton';
import {screenWidth, vh, vw} from '../../Util/dimensions';

const CashBack = (props) => {
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
    <View    style={{
      // position:"absolute",
      width: screenWidth - vw(40),
      borderWidth: 1,
    
      borderRadius: vw(20),
      height: vw(180),
      marginVertical:vh(10),
      
    }}>
      <View style={{marginTop:vh(60),marginLeft:vw(30)}}>
      <TouchableOpacity>
      <Text style={{color:"white"}}>Remainder</Text>
      <Image source={require('../../assets/Icons/notification.png')} style={{height:vw(30),width:vw(30)}}/>
      </TouchableOpacity>
      </View>
    <Animated.View
    {...panResponder.panHandlers}
      style={{
        position:"absolute",
        width: screenWidth - vw(40),
        borderWidth: 1,
        padding: vw(20),
        backgroundColor: props.backgroundColor,
        borderRadius: vw(20),
        height: vw(180),
        // marginVertical:vh(10),
        transform: [{translateX: slide.x}],
      }}>
      <Text
        style={{
          fontSize: vw(14),
          fontWeight: 'bold',
          letterSpacing: 1,
          marginBottom: vh(13),
        }}>
        {props.heading}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={{fontSize: vw(12), width: vw(150), marginBottom: vh(25)}}>
            {props.context}
          </Text>
          <BlackButton text="Pay now" />
        </View>
        <Image
          source={props.Img}
          style={{
            marginLeft: vw(60),
            height: vw(80),
            width: vw(80),
            marginTop: vh(30),
          }}
        />
      </View>
    </Animated.View>
    </View>
  );
};

export default CashBack;

const styles = StyleSheet.create({});

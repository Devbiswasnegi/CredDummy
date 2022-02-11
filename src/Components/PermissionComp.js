import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';

const PermissionComp = props => {
  const [change, setChange] = useState(false);
  const shake = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    console.log('props.deny child',props.deny);
   props.deny && Animated.timing(shake, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  
  },[])
  
    // setChange(!change);


  //  console.log(shake)

  const spin = shake.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 1],
    outputRange: ['0deg', '30deg', '0deg', '-30deg', '0deg'],
  });
  return (
    <View>
      {/* <TouchableOpacity onPress={press}>
        <Text style={{color: change ? 'orange' : 'pink'}}>PRess</Text>
      </TouchableOpacity> */}
      <Animated.View
        style={[
          styles.mainView,
          {
            transform: [
              {
                rotate:spin,
              },
            ],
          },
        ]}>
        <Image source={props.Img} style={styles.Img} />
        <View>
          <View style={styles.textView}>
            <Text style={styles.heading}>{props.heading}</Text>
            <View style={styles.manView}>
              <Text style={styles.manText}>mandatory</Text>
            </View>
          </View>

          <Animated.Text
            style={[
              styles.discription,
              // {transform:[{rotate:spin}]}
            ]}>
            {props.discription}
          </Animated.Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default PermissionComp;

const styles = StyleSheet.create({
  mainView: {flexDirection: 'row', marginLeft: vw(-5)},
  Img: {width: vw(20), height: vw(20), marginRight: vw(10)},
  textView: {flexDirection: 'row', alignItems: 'center'},
  heading: {
    color: '#CDCDCD',
    fontWeight: 'bold',
    // fontSize: vw(18),
    letterSpacing: 1.5,
    width: vw(190),
    lineHeight: vh(25),
  },
  manView: {
    backgroundColor: '#6C4341',
    color: '#CDCDCD',
    fontSize: vw(8),
    paddingVertical: vw(4),

    width: vw(50),
    borderRadius: vh(5),
    alignItems: 'center',
  },
  manText: {color: '#CDCDCD', fontSize: vw(8)},
  discription: {
    color: '#CDCDCD',
    letterSpacing: 0.5,
    width: screenWidth - vw(110),
    fontSize: vw(11),
    marginTop: vh(2),
    lineHeight: vh(16),
  },
});

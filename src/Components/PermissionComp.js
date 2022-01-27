import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';

const PermissionComp = props => {
  return (
    <View style={styles.mainView}>
      <Image source={props.Img} style={styles.Img} />
      <View>
        <View style={styles.textView}>
          <Text style={styles.heading}>{props.heading}</Text>
          <View style={styles.manView}>
            <Text style={styles.manText}>mandatory</Text>
          </View>
        </View>

        <Text style={styles.discription}>{props.discription}</Text>
      </View>
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

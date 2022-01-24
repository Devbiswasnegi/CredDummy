import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';

const PermissionComp = (props) => {
  return (
    <View style={{flexDirection:"row",marginLeft:vw(-5)}}>
        <Image
          source={props.Img}
          style={{width: vw(20), height: vw(20),marginRight:vw(10)}}
        />
      <View>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#CDCDCD',
              fontWeight: 'bold',
              // fontSize: vw(18),
              letterSpacing: 1.5,
              width: vw(190),
              lineHeight: vh(25),
            }}>
            {props.heading}
          </Text>
          <View
            style={{
              backgroundColor: '#6C4341',
              color: '#CDCDCD',
              fontSize: vw(8),
              paddingVertical: vw(4),

              width: vw(50),
              borderRadius: vh(5),
              alignItems: 'center',
            }}>
            <Text style={{color: '#CDCDCD', fontSize: vw(8)}}>mandatory</Text>
          </View>
        </View>
      
      <Text
        style={{
          color: '#CDCDCD',
          letterSpacing: 0.5,
          width: screenWidth - vw(110),
          fontSize: vw(11),
          marginTop: vh(2),
          lineHeight:vh(16)
        }}>
       {props.discription}
      </Text>
      </View>
    </View>
  );
};

export default PermissionComp;

const styles = StyleSheet.create({});

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../../Util/dimensions';
import LinearGradient from 'react-native-linear-gradient';

const CreditCards = (props) => {
    console.log("props",props);
  return (
    <SafeAreaView>
      <View style={{}}>
        <LinearGradient
          colors={props?.backColor}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            width: screenWidth - vw(60),
            // borderWidth: 1,
            height: vh(190),
            borderRadius: vw(15),
          }}>
              <View style={{padding:20}}>
          <Text style={styles.txt}>{props.bankName}</Text>
          <View style={{flexDirection:"row",marginTop:vh(90)}}>
          <Text style={styles.txt}>1234 </Text>
          <Text style={styles.txt}>XXXX </Text>
          <Text style={styles.txt}>XXXX </Text>
          <Text style={styles.txt}>1234</Text>
          </View>
          <Text style={styles.name}>Card Holder Name</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default CreditCards;

const styles = StyleSheet.create({
    txt:{fontWeight:"bold",color:"white",fontSize:vw(14)}
   ,
   name:{fontWeight:"bold",color:"white",fontSize:vw(14),marginTop:10}
});

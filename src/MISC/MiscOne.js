import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const MiscOne = props => {
  console.log('propsprops', props);
  let t = 50;

  const onpress = () => {
    props.ram(t); // const re=(t)=>{
    // console.log("callback",t)
    // setName(t)
    //  }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity
        onPress={onpress}
        style={{
          height: 300,
          width: 300,
        //   borderWidth: 1,
justifyContent:"center",alignItems:"center"
          //   borderColor: 'white',
        }}>
        <View
          style={{
            height: 50,
            width: 200,
            borderWidth: 1,
            shadowOffset: {width: 0, height: 4},
            shadowRadius: 0.3,
            shadowColor: 'red',
            shadowOpacity: 0.4,
          }}>
          <Text>click</Text>
          {/* <Text>{props.label}</Text> */}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MiscOne;

const styles = StyleSheet.create({});

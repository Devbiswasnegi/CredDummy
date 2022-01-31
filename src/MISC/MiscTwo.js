import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MiscOne from './MiscOne';

const MiscTwo = () => {
    const [name,setName]=useState("")

    // const re=(t)=>{
    //     console.log("callback",t)
    //     setName(t)
    // }
  return (
    <SafeAreaView>
      <Text>MiscTwo</Text>

      {/* <MiscOne
      label="click"
      ram={re}
      /> */}

      <Text>{name}</Text>
    </SafeAreaView>
  );
};

export default MiscTwo;

const styles = StyleSheet.create({});

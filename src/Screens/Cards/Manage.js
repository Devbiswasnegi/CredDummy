import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import { vw } from '../../Util/dimensions';

const Manage = () => {
  return (
    <View>
      <Option/>
    </View>
  );
};

const Option=()=>{
  return(
    <View>
<Text>manage CRED Protect</Text>
<Image
source={require('../../assets/Icons/next.png')} style={{width:vw(20),height:vw(20)}}
/>

    </View>
  )
}

export default Manage;

const styles = StyleSheet.create({});

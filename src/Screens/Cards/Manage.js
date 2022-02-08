import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../../Util/dimensions';

const Manage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#202427', alignItems: 'center'}}>
      <Option
        icon={require('../../assets/Icons/shield.png')}
        txt={'manage CRED Protect'}
        arrow={require('../../assets/Icons/next.png')}
      />
      <Option
        icon={require('../../assets/Icons/sketch.png')}
        txt={'payment history'}
        arrow={require('../../assets/Icons/next.png')}
      />
      <Option
        icon={require('../../assets/Icons/history.png')}
        txt={'historical statements'}
        arrow={require('../../assets/Icons/next.png')}
      />
      <Option
        icon={require('../../assets/Icons/archive.png')}
        txt={'archive card'}
        arrow={require('../../assets/Icons/next.png')}
      />
      <Option
        icon={require('../../assets/Icons/headphone.png')}
        txt={'talk to us'}
        arrow={require('../../assets/Icons/next.png')}
      />
      <Option
        icon={require('../../assets/Icons/customer-service.png')}
        txt={'call bank customer care'}
        arrow={require('../../assets/Icons/next.png')}
      />
    </View>
  );
};

const Option = ({icon, txt, arrow}) => {
  return (
    <View style={styles.compMainView}>
      <TouchableOpacity style={styles.compView}>
        <View style={styles.iconView}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.txt}>{txt}</Text>
        </View>
        <Image source={arrow} style={styles.arrImg} />
      </TouchableOpacity>
    </View>
  );
};

export default Manage;

const styles = StyleSheet.create({
  compMainView: {
    width: screenWidth - vw(40),
    marginVertical: vh(20),
  },
  compView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
  },
  icon: {
    width: vw(20),
    height: vw(20),
  },
  txt: {
    color: 'white',
    fontSize: vw(16),
    fontWeight: 'bold',
    marginLeft: vw(10),
  },
  arrImg: {width: vw(20), height: vw(20)},
});

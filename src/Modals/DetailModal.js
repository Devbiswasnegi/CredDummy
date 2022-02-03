import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';

const data = [
  {
    id: 1,
    title: 'unbilled',
    img: require('../assets/Icons/document.png'),
  },
  {
    id: 2,
    title: 'bank accounts',
    img: require('../assets/Icons/bank.png'),
  },
  {
    id: 3,
    title: 'store',
    img: require('../assets/Icons/handbag.png'),
  },
  {
    id: 4,
    title: 'credit score',
    img: require('../assets/Icons/business-credit-score.png'),
  },
];

const DetailModal = () => {
  return (
    <SafeAreaView
      style={{
        //   height: 500,
        flex: 1,
        width: screenWidth,
        borderWidth: 1,
        backgroundColor: '#00000090',
      }}>
      <View
        style={{
          marginTop: 100,
          backgroundColor: '#eaeaec',
          flex: 1,
          borderTopEndRadius: vw(30),
          borderTopLeftRadius: vw(30),
          padding: vw(20),

          //   flexWrap:"wrap",
        }}>
        <FlatList
          // style={{flexWrap:"wrap"}}
          //   horizontal
          numColumns={4}
          data={data}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{margin: vw(10)}}>
                <Cell title={item.title} img={item.img} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Cell = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: vw(60),
        height: vh(90),
        // borderWidth: 1,
        // margin: 10,
      }}>
      <TouchableOpacity
        style={{
          width: vw(65),
          height: vw(65),
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: vw(12),
          backgroundColor: 'white',
        }}>
        <Image source={props.img} style={{width: vw(30), height: vw(30)}} />
      </TouchableOpacity>
      <Text style={{textAlign: 'center', marginTop: vh(8), fontWeight: '500'}}>
        {props.title}
      </Text>
    </View>
  );
};

export default DetailModal;

const styles = StyleSheet.create({});

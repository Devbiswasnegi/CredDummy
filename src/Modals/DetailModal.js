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

const DetailModal = () => {
  return (
    <SafeAreaView
      style={{
        //   height: 500,
        flex: 1,
        width: screenWidth,
        borderWidth: 1,
        backgroundColor: 'yellow',
      }}>
      <View
        style={{
          marginTop: 100,
          backgroundColor: 'red',
          flex: 1,
          borderTopEndRadius: vw(20),
          borderTopLeftRadius: vw(20),
          padding: vw(20),
        //   flexWrap:"wrap",
          
        }}>
        <FlatList
        // style={{flexWrap:"wrap"}}
        //   horizontal
        numColumns={4}
          data={[1, 2, 3, 4, 5, 6,7]}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{margin:10}}>
                <Cell
                no={item} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Cell = (props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: vw(60),
        height: vh(90),
        borderWidth: 1,
        // margin: 10,
      }}>
      <TouchableOpacity
        style={{
          width: vw(60),
          height: vw(70),
          //   borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/Icons/check.png')}
          style={{width: vw(30), height: vw(30)}}
        />
      </TouchableOpacity>
      <Text style={{}}>{props.no}unbilled</Text>
    </View>
  );
};

export default DetailModal;

const styles = StyleSheet.create({});

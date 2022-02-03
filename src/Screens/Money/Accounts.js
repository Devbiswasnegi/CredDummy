import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Accounts = () => {
  const Neu = ({children}) => {
    return (
      <View
        style={{
          shadowOffset: {width: -6, height: -6},
          shadowOpacity: 1,
          shadowRadius: 6,
          // shadowColor: 'rgb(136, 176, 75,0.)',
          shadowColor:"#ffffff40"
          
          //  width: 200 || 100, height: 50
        }}>
        <View 
        style={{
          shadowOffset: {width: 6, height: 6},
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowColor: '#00000040',
          //  width: 200 || 100, height: 50
        }}>
          <TouchableOpacity
            style={{
              // borderWidth: 1,
              // borderColor:"#ffffff10",
              width: 200 || 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:"rgb(136, 176, 75)"
            }}>
            {children}
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  const NeuRevert = ({children}) => {
    return (
      <View
        style={{
          marginVertical:40,
          shadowOffset: {width: -6, height: -6},
          shadowOpacity: 1,
          shadowRadius: 6,
          // shadowColor: 'rgb(136, 176, 75,0.)',
          shadowColor:"#00000040"
          
          //  width: 200 || 100, height: 50
        }}>
        <View 
        style={{
          shadowOffset: {width: 6, height: 6},
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowColor: '#ffffff40',
          //  width: 200 || 100, height: 50
        }}>
          <TouchableOpacity
            style={{
              // borderWidth: 1,
              // borderColor:"#ffffff10",
              width: 200 || 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:"rgb(136, 176, 75)"
            }}>
            {children}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#88B04B',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Neu>
        <Text>hiii</Text>
      </Neu>

      <NeuRevert>

      </NeuRevert>

      
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({});

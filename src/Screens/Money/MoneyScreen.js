import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopMoneyNavigator from './TopMoneyNavigator';
const MoneyNavigator = createNativeStackNavigator();

const MoneyScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#202427',}}>
      <MoneyNavigator.Navigator>
        <MoneyNavigator.Screen
          name="TopMoneyNavigator"
          component={TopMoneyNavigator}
          options={{headerShown: false}}
        />
      </MoneyNavigator.Navigator>
    </SafeAreaView>
  );
};

export default MoneyScreen;

const styles = StyleSheet.create({});

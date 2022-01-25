import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
import CardsScreen from '../Screens/Cards/CardsScreen';
import Details from '../Screens/Details/Details';
import MoneyScreen from '../Screens/Money/MoneyScreen';
import Club from '../Screens/Club/Club';
import {vw} from '../Util/dimensions';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/Icons/home.png')}
                style={{width: vw(20), height: vw(20)}}
              />
            ) : (
              <Image
                source={require('../assets/Icons/home.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#8A6D63'}}
              />
            );
          },
          
        //   tabBarStyle:{
        //     padding:20,
        //   borderWidth:1,width:20,height:20
        // },
        }} //D9896A  //8A6D63
      />
      <Tab.Screen
        name="cards"
        component={CardsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/Icons/creditcardbottom.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#D9896A'}}
              />
            ) : (
              <Image
                source={require('../assets/Icons/creditcardbottom.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#8A6D63'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/Icons/detail.png')}
                style={{width: vw(60), height: vw(60), tintColor: '#D9896A'}}
              />
            ) : (
              <Image
                source={require('../assets/Icons/detail.png')}
                style={{width: vw(60), height: vw(60), tintColor: '#8A6D63'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="money"
        component={MoneyScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/Icons/money.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#D9896A'}}
              />
            ) : (
              <Image
                source={require('../assets/Icons/money.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#8A6D63'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="club"
        component={Club}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/Icons/suitcase.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#D9896A'}}
              />
            ) : (
              <Image
                source={require('../assets/Icons/suitcase.png')}
                style={{width: vw(20), height: vw(20), tintColor: '#8A6D63'}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});

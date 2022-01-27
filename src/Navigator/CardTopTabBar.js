import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Mycards from '../Screens/Cards/Mycards';
import Unbilled from '../Screens/Cards/Unbilled';
import Max from '../Screens/Cards/Max';
import Benefits from '../Screens/Cards/Benefits';
import Manage from '../Screens/Cards/Manage';
import {vh, vw} from '../Util/dimensions';

const TopTab = createMaterialTopTabNavigator();

const CardTopTabBar = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#202427', height: vh(40),},
        // tabBarLabelStyle: {color: 'red', fontSize: vw(12),},
        // tabBarLabel:false,
        // tabBarItemStyle: {borderWidth: 1},
        
      }}>
      <TopTab.Screen
        name="my cards"
        component={Mycards}
        // options={{tabBarLabel: 'my card'}}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.innerView}>
                <Text style={[styles.txt, {opacity: focused ? 1 : 0.5}]}>
                  my cards
                </Text>
              </View>
            );
          },
          
          // tabBarIndicatorStyle​:false,
          // tabBarIndicator:({focused})=>{
          //   return (
          //     focused?
          //     tabBarIndicatorContainerStyle:"red":null
          //   )

          // }
          
        }}
      />
      <TopTab.Screen
        name="unbilled"
        component={Unbilled}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.innerView}>
                <Text style={[styles.txt, {opacity: focused ? 1 : 0.5}]}>
                  unbilled
                </Text>
              </View>
            );
          },
        }}
      />
      <TopTab.Screen
        name="max"
        component={Max}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.innerView}>
                <Text style={[styles.txt, {opacity: focused ? 1 : 0.5}]}>
                  max
                </Text>
              </View>
            );
          },
        }}
      />
      <TopTab.Screen
        name="benefits"
        component={Benefits}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.innerView}>
                <Text style={[styles.txt, {opacity: focused ? 1 : 0.5}]}>
                  benefits
                </Text>
              </View>
            );
          },
        }}
      />
      <TopTab.Screen
        name="manage"
        component={Manage}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.innerView}>
                <Text style={[styles.txt, {opacity: focused ? 1 : 0.5}]}>
                  manage
                </Text>
              </View>
            );
          },
        }}
      />
    </TopTab.Navigator>
  );
};

export default CardTopTabBar;

const styles = StyleSheet.create({
  innerView: {
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
    width: vw(70),
    height: vh(20),
    alignItems: 'center',
  },

  txt: {
    color: 'black',
    fontSize: vw(14),
    fontWeight: 'bold',

    color: 'white',
  },
});

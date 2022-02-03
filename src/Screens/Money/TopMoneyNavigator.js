import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Accounts from './Accounts';
import CreditScore from './CreditScore';
import {vh, vw} from '../../Util/dimensions';

const MonetTop = createMaterialTopTabNavigator();

const TopMoneyNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <MonetTop.Navigator
        screenOptions={{
          tabBarItemStyle: {width: vw(110)},
          tabBarStyle: {backgroundColor: '#202427'},
          tabBarIndicatorStyle: {borderColor: 'white', borderWidth: 1},
        }}>
        <MonetTop.Screen
          name="Accounts"
          component={Accounts}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused ? 'white' : '#ffffff50',
                    fontWeight: 'bold',
                  }}>
                  accounts
                </Text>
              );
            },
          }}
        />
        <MonetTop.Screen
          name="CreditScore"
          component={CreditScore}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused ? 'white' : '#ffffff50',
                    fontWeight: 'bold',
                  }}>
                  credit score
                </Text>
              );
            },
          }}
        />
      </MonetTop.Navigator>
    </View>
  );
};

export default TopMoneyNavigator;

const styles = StyleSheet.create({});

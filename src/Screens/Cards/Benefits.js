import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BenefitScreen from './BenefitsScreens/BenefitScreen';
import ListEmpty from './BenefitsScreens/ListEmpty';
const BenefitsNavigator = createNativeStackNavigator();

const Benefits = () => {
  return (
    <View style={{flex: 1}}>
      <BenefitsNavigator.Navigator>
        <BenefitsNavigator.Screen
          name="ListEmpty"
          component={ListEmpty}
          options={{headerShown: false}}
        />
      </BenefitsNavigator.Navigator>
    </View>
  );
};

export default Benefits;

const styles = StyleSheet.create({});

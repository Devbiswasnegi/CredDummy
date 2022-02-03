import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardTopTabBar from '../../Navigator/CardTopTabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../Details/Details';
import DetailModal from '../../Modals/DetailModal';
// import { NativeScreenNavigationContainer } from 'react-native-screens';
createNativeStackNavigator
const CardStack=createNativeStackNavigator()

const CardsScreen = () => {
  return (
    <SafeAreaView style={{flex:1,
      backgroundColor: '#202427',}}>

        <CardStack.Navigator screenOptions={{headerShown:false}}>
          <CardStack.Screen name="CardTopTabBar" component={CardTopTabBar}/>
          <CardStack.Screen name="DetailModal" component={DetailModal} options={{presentation:"modal"}}/>
        </CardStack.Navigator>
     {/* <CardTopTabBar/> */}
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({});

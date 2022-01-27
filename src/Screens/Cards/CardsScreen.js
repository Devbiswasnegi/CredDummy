import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardTopTabBar from '../../Navigator/CardTopTabBar';

const CardsScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     <CardTopTabBar/>
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({});

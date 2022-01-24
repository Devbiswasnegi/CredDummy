import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootNavigator from './src/Navigator/RootNavigation'

const App = () => {
  return (
    <View style={{flex:1}}>
      <RootNavigator/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

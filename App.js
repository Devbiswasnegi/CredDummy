import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootNavigator from './src/Navigator/RootNavigation'
import {Provider} from 'react-redux'
import { store } from './src/Redux/store';

const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
      <RootNavigator/>
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

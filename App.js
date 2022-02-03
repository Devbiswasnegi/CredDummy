import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootNavigator from './src/Navigator/RootNavigation'
import {Provider} from 'react-redux'
import { store,persistor } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <RootNavigator/>
      {/* </PersistGate> */}
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

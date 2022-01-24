// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import ContactNumber from '../Screens/Verify/ContactNumber';
import GrantPermission from '../Screens/Verify/GrantPermission';

const Stack = createNativeStackNavigator();

function RootNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

      <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="ContactNumber"
          component={ContactNumber}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="GrantPermission"
          component={GrantPermission}
          options={{headerShown: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

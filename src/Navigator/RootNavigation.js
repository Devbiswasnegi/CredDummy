import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import ContactNumber from '../Screens/Verify/ContactNumber';
import GrantPermission from '../Screens/Verify/GrantPermission';
import OtpScreen from '../Screens/Verify/OtpScreen';
import CardDetailsStartModal from '../Modals/CardDetailsStartModal';
import BottomTabNavigator from './BottomTabNavigator';
import AfterDetails from '../Screens/Verify/AfterDetails';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
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
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="CardDetailsStartModal"
          component={CardDetailsStartModal}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="AfterDetails"
          component={AfterDetails}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

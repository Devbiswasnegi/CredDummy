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
import EnterName from '../Screens/Verify/EnterName';
import EnterPanNumber from '../Screens/Verify/EnterPanNumber';
import CreditCards from '../Components/CreditCards/CreditCards';
import MiscOne from '../MISC/MiscOne';
import MiscTwo from '../MISC/MiscTwo';
import DetailModal from '../Modals/DetailModal';
import Details from '../Screens/Details/Details';
import CardTopTabBar from './CardTopTabBar';
import LoginIn from '../Screens/Verify/LoginIn';
import SignUp from '../Screens/Verify/SignUp';
import BenefitScreen from '../Screens/Cards/BenefitsScreens/BenefitScreen';
import Chat from '../Screens/ChatScreen/Chat';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigator">
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

        <Stack.Screen
          name="LoginIn"
          component={LoginIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterName"
          component={EnterName}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPanNumber"
          component={EnterPanNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreditCards"
          component={CreditCards}
          options={{headerShown: false}}
        />
       

        <Stack.Screen
          name="BenefitScreen"
          component={BenefitScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MiscTwo"
          component={MiscTwo}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false,presentation:"transparentModal"}} CardTopTabBar
        /> */}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default RootNavigation;

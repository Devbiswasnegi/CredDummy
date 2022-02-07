import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
import CardsScreen from '../Screens/Cards/CardsScreen';
import Details from '../Screens/Details/Details';
import MoneyScreen from '../Screens/Money/MoneyScreen';
import Club from '../Screens/Club/Club';
import {vh, vw} from '../Util/dimensions';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = props => {
  const [open, setOpen] = useState(true);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#202427', height: vh(80)},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/Icons/home.png')}
                  style={[
                    styles.Img,
                    {tintColor: focused ? '#D9896A' : '#8A6D63'},
                  ]}
                />
                <Text
                  style={{
                    color: focused ? '#D9896A' : '#8A6D63',
                    fontSize: vw(12),
                  }}>
                  home
                </Text>
              </View>
            );
          },

          //   tabBarStyle:{
          //     padding:20,
          //   borderWidth:1,width:20,height:20
          // },
        }} //D9896A  //8A6D63
      />
      <Tab.Screen
        name="cards"
        component={CardsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/Icons/creditcardbottom.png')}
                  style={[
                    styles.Img,
                    {tintColor: focused ? '#D9896A' : '#8A6D63'},
                  ]}
                />

                <Text
                  style={{
                    color: focused ? '#D9896A' : '#8A6D63',
                    fontSize: vw(12),
                  }}>
                  cards
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        // screenOptions={{}}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#202427',
                  marginTop: -vh(10),
                  borderRadius: vw(40),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setOpen(!open)
                    open
                      ? props.navigation.navigate('Details')
                      // : props.navigation.navigate('cards')
                      :props.navigation.navigate("CardTopTabBar")
                  }}>
                  <Image
                    source={require('../assets/Icons/detail.png')}
                    style={{
                      width: vw(80),
                      height: vw(80),
                      tintColor: focused ? '#D9896A' : '#8A6D63',
                    }}
                  />
                </TouchableOpacity>
               
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="money"
        component={MoneyScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/Icons/money.png')}
                  style={[
                    styles.Img,
                    {tintColor: focused ? '#D9896A' : '#8A6D63'},
                  ]}
                />
                <Text
                  style={{
                    color: focused ? '#D9896A' : '#8A6D63',
                    fontSize: vw(12),
                  }}>
                  money
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="club"
        component={Club}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/Icons/suitcase.png')}
                  style={[
                    styles.Img,
                    {tintColor: focused ? '#D9896A' : '#8A6D63'},
                  ]}
                />
                <Text
                  style={{
                    color: focused ? '#D9896A' : '#8A6D63',
                    fontSize: vw(12),
                  }}>
                  club
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  Img: {
    width: vw(20),
    height: vw(20),
  },
});

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';
import {localImages} from '../Util/LocalImages';
import CardTextInput from '../Components/CardTextInput';
import CreditCards from '../Components/CreditCards/CreditCards';
import { useSelector } from 'react-redux';


const CardDetailsStartModal = props => {
  const {name}=useSelector(state=>state.login)
  return (
    <SafeAreaView style={styles.mainSafe}>
<View style={{alignSelf:"center",marginTop:vh(50)}}>
      <CreditCards
      backColor={["#d387ab","#e899dc"]}
      holdername={name}
      bankName="AXIS BANK"
      />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: vh(80),
          backgroundColor: 'white',
          borderTopLeftRadius: vw(30),
          borderTopRightRadius: vw(30),
        }}>
          
        <View
          style={{
            width: screenWidth - vw(50),
            // borderWidth: 1,
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: vh(40),
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: vw(15),
                width: vw(200),
                letterSpacing: 1,
                //   borderWidth:1
              }}>
              we will deposit ₹1 for confirmation
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: vw(12),

                  letterSpacing: 1,
                  color: 'grey',
                  //   borderWidth:1
                }}>
                Need help?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: vh(20)}}>
            <Image
              source={localImages.creditCardPink}
              style={{width: vw(40), height: vw(40)}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: vh(40),
              alignItems: 'center',
              //   borderWidth: 1,
            }}>
            <CardTextInput />
            <CardTextInput />
            <CardTextInput />

            <Text
              style={{
                //   height: vh(40),
                //   borderWidth: 1,
                //   width: vw(300),
                fontSize: vw(20),
                letterSpacing: 1,
                textAlignVertical: 'center',
              }}>
              7183
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('BottomTabNavigator');
            }}
            style={{
              width: vw(120),
              borderWidth: 1,
              height: vh(40),
              borderRadius: vw(30),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#4B4F52',
              marginTop: vh(20),
            }}>
            <Text
              style={{color: '#D9886A', fontWeight: '600', fontSize: vw(14)}}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardDetailsStartModal;

const styles = StyleSheet.create({
  mainSafe: {
    flex: 1,
    backgroundColor: '#861657',
  },
});

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';
import {localImages} from '../Util/LocalImages';
import CardTextInput from '../Components/CardTextInput';
import CreditCards from '../Components/CreditCards/CreditCards';
import {useDispatch, useSelector} from 'react-redux';
import {cardOne, cardThree, cardTwo} from './action';

const CardDetailsStartModal = props => {
  const dispatch = useDispatch();
  const inputOne = useRef();
  const inputTwo = useRef();
  const inputThree = useRef();
  const [oneData, setOneData] = useState('');
  const [twoData, setTwoData] = useState('');
  const [threeData, setThreeData] = useState('');
  // console.log('input One', inputOne);
  const {name} = useSelector(state => state.login);
  return (
    <SafeAreaView style={styles.mainSafe}>
      <View style={styles.viewOne}>
        <CreditCards
          backColor={['#d387ab', '#e899dc']}
          holdername={name}
          bankName="AXIS BANK"
        />
      </View>
      <View style={styles.viewModal}>
        <View style={styles.insideModal}>
          <View style={styles.needView}>
            <Text style={styles.depositTxt}>
              we will deposit ₹1 for confirmation
            </Text>
            <TouchableOpacity>
              <Text style={styles.needTxt}>Need help?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewDummyCard}>
            <Image
              source={localImages.creditCardPink}
              style={{width: vw(40), height: vw(40)}}
            />
          </View>
          <View style={styles.cardDetails}>
            <CardTextInput
              inputRef={inputOne}
              onChangeText={text => {
                setOneData(text);

                (`${text}`.length>3?
                inputTwo.current.focus():null)
              }}

              // onSubmitEditing={()=>}
            />
            <CardTextInput
              inputRef={inputTwo}
              onChangeText={text => {
                setTwoData(text);
                (`${text}`.length>3?
                inputThree.current.focus():null)
              }}
            />
            <CardTextInput
              inputRef={inputThree}
              onChangeText={text => {
                setThreeData(text);

                // (`${text}`.length>0 &&`${text}`.length===0 && inputTwo.current.focus() )
              }}
            />

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
              dispatch(cardOne(oneData));
              dispatch(cardTwo(twoData));
              dispatch(cardThree(threeData));
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
  viewOne: {alignSelf: 'center', marginTop: vh(50)},
  viewModal: {
    flex: 1,
    marginTop: vh(80),
    backgroundColor: 'white',
    borderTopLeftRadius: vw(30),
    borderTopRightRadius: vw(30),
  },
  insideModal: {
    width: screenWidth - vw(50),
    // borderWidth: 1,
    alignSelf: 'center',
  },
  needView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(40),
  },
  depositTxt: {
    fontWeight: '600',
    fontSize: vw(15),
    width: vw(200),
    letterSpacing: 1,
    //   borderWidth:1
  },
  needTxt: {
    fontSize: vw(12),

    letterSpacing: 1,
    color: 'grey',
    //   borderWidth:1
  },
  viewDummyCard: {marginTop: vh(20)},
  cardDetails: {
    flexDirection: 'row',
    marginTop: vh(40),
    alignItems: 'center',
    //   borderWidth: 1,
  },
});

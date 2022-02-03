import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../Util/dimensions';
import ManageButton from './ManageButton';
import SmallBlueButton from './SmallBlueButton';
import CreditCards from './CreditCards/CreditCards';

const MyCardComponents = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.viewOne}>
        <View style={styles.cardView}>
          <CreditCards 
          backColor={props.backColor}
          bankName={props.bankName}
          />
        </View>
        {/* <Image
          source={require('../assets/Icons/realCard.png')}
          style={{
            width: screenWidth - vw(50),
            maxHeight: vw(200),
            //   borderWidth: 1,
          }}
        /> */}
        <View style={styles.txtView}>
          <View style={styles.totalDueView}>
            <View>
              <Text style={styles.totalTxt}>total due</Text>
              <Text style={styles.amt}>₹7779</Text>
            </View>
            <Text style={styles.days}>DUE IN 8 DAYS</Text>
          </View>

          <View style={styles.greenView}>
            <Text style={styles.greentxt}>
              ASSURED CASHBACK ON EVERY PAYMENT
            </Text>
          </View>
          <View style={styles.buttonView}>
            <ManageButton />
            <SmallBlueButton continue={props.continue}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyCardComponents;

const styles = StyleSheet.create({
  mainView: {
    // borderWidth: 1,
    alignItems: 'center',
    height: vw(410),
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    borderRadius: 10,
    // position:"absolute"
    // backgroundColor:"lightblack"
    marginVertical: vh(5),
    elevation: 5,
  },
  viewOne: {
    alignItems: 'center',
    height: vw(400),
    //   borderWidth: 1,
    width: screenWidth - vw(50),
    backgroundColor: '#202427',
    borderRadius: 14,
    shadowColor: 'black',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 5,
    shadowRadius: 5,
    borderRadius: 10,
    // marginTop:vh(5),
    elevation: 5,
  },
  cardView: {marginTop: vh(5)},
  txtView: {
    width: screenWidth - vw(70),
    //   maxHeight: vh(200),
    //   borderWidth: 1,
  },

  totalDueView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(10),
  },
  totalTxt: {color: 'white', opacity: 0.5, fontSize: vw(13)},
  amt: {
    color: 'white',
    opacity: 1,
    fontSize: vw(13),
    fontWeight: 'bold',
    lineHeight: vh(30),
  },
  days: {
    color: 'orange',
    opacity: 1,
    fontSize: vw(13),
    fontWeight: 'bold',
    lineHeight: vh(30),
    letterSpacing: 1,
  },
  greenView: {
    backgroundColor: 'green',
    height: vh(25),
    paddingHorizontal: vw(6),
    borderRadius: vw(6),
    width: screenWidth - vw(70),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  greentxt: {
    fontWeight: 'bold',
    color: 'lightgreen',
    fontSize: vw(12),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(35),
  },
});

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth, vh, vw} from '../../Util/dimensions';
import MyCardComponents from '../../Components/MyCardComponents';

const Mycards = () => {
  return (
    <SafeAreaView style={styles.mainSafe}>
      <ScrollView showsVerticalScrollIndicator={false}
        style={{
          width: screenWidth - vw(40),
        //   borderWidth: 1,

          alignSelf: 'center',marginTop:vh(20)
        }}>
            <View style={{}}>
        <MyCardComponents 
        backColor={['#4c669f', '#3b5998', '#192f6a']}
        bankName="AXIS BANK"
        />
        </View>
        <MyCardComponents 
        backColor={['#ffa69e', '#861657']}
        bankName="HDFC BANK"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mycards;

const styles = StyleSheet.create({
    mainSafe:{flex: 1, backgroundColor: '#202427'}
});

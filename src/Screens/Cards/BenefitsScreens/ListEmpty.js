import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    TextInput,
  } from 'react-native';
  import React, {useEffect, useRef, useState} from 'react';
  import axios from 'axios';
  import {vh, vw} from '../../../Util/dimensions';
  import BenefitScreen from './BenefitScreen';
  
  
  const myntraLogo = require('../../../assets/Logo/myntraLogo.png');
  const boatLogo = require('../../../assets/Logo/boatLogo.png');
  const lenskartLogo = require('../../../assets/Logo/lenskartLogo.jpeg');
  const fabIndiaLogo = require('../../../assets/Logo/fabIndiaLogo.webp');
  
  const arr = [myntraLogo, boatLogo, lenskartLogo, fabIndiaLogo];
  
  const ListEmpty = () => {
    const [data, setData] = useState([]);
    const [extradata, setExtradata] = useState([]);
    const [more, setMore] = useState(1);
    const [act, setAct] = useState(false);
    const [search, setSearch] = useState();
    useEffect(() => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?_limit=3&_page=${more}`,
        )
        .then(res => {
          setData([...data, ...res.data]);
          setMore(more + 1);
          console.log('useeffect', res);
        })
        .catch();
  
      axios
        .get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => {
          setExtradata(res);
          // console.log('extraData', res?.data);
        })
        .catch();
    }, []);
  
    const press = () => {
      setAct(true);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?_limit=3&_page=${more}`,
        )
        .then(res => {
          setData([...data, ...res.data]);
          console.log('press', res);
        })
        .catch();
      setMore(more + 1);
      setAct(false);
    };
    return (
      <SafeAreaView style={styles.safeMain}>
    
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={id => id.toString()}
          renderItem={({item, index}) => {
            //   console.log(item);
            return <Coupon item={item} index={index} />;
          }}
        //   ListEmptyComponent={<BenefitScreen/>}
        />
        <TouchableOpacity onPress={press}>
          {act && <ActivityIndicator />}
          <Text style={{color: 'lightblue', fontSize: 20, fontWeight: 'bold'}}>
            more. . .
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const Coupon = ({item, index}) => {
    return (
      <View style={styles.couponMain}>
        <TouchableOpacity style={styles.touch}>
          <Image source={arr[index % arr.length]} style={styles.logo} />
          <View>
            {/* <Text>{item.id}</Text> */}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ListEmpty;
  
  const styles = StyleSheet.create({
    safeMain: {
      flex: 1,
      backgroundColor: '#202427',
      // alignItems: 'center',
    },
    couponMain: {
      marginVertical: vh(15),
      // borderWidth:1  height: vh(150),
      //   width: vw(300),
      //  borderWidth:3,
      //  borderRadius:(18),
      alignSelf: 'center',
      shadowColor: 'grey',
      shadowOpacity: 1,
      shadowOffset: {
        width: -3,
        height: -3,
      },
      shadowRadius: 5,
    },
    touch: {
      borderRadius: vw(18),
      backgroundColor: 'white',
      flexDirection: 'row',
      // borderWidth: 1,
      // borderColor:"white",
      height: vh(150),
      width: vw(300),
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowRadius: 5,
    },
    logo: {
      width: vw(80),
      height: vw(80),
      resizeMode: 'contain',
    },
    name: {
      //   color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      width: vw(150),
    },
    email: {
      color: 'red',
      fontSize: 14,
      fontWeight: 'bold',
      width: vw(150),
      marginTop: vh(15),
    },
    searchBar: {
      width: vw(300),
      borderWidth: 2,
      borderColor: 'white',
      fontSize: vw(18),
      paddingVertical: vh(10),
      alignSelf: 'center',
      borderRadius: vw(10),
      color: 'white',
      paddingLeft: vw(10),
    },
  });
  
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const MiscOne = props => {
  console.log('propsprops', props);
  let t = 50;
  const [d,setD]=useState([])
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [last, setLast] = useState(0);
  const onpress = () => {
    // props.ram(t);
    // const re=(t)=>{
    //  console.log("callback",t)
    // setName(t)
    //  }
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
      .then(res => res.json())
      .then(res => {
        // setD(res)
        setData([...data,...res]);
        setCurrentPage(currentPage + 1);
      })
      .catch();
  };
  console.log('data', data);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity
        onPress={onpress}
        style={{
          height: 300,
          width: 300,
          //   borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          //   borderColor: 'white',
        }}>
        <View
          style={{
            height: 50,
            width: 200,
            borderWidth: 1,
            shadowOffset: {width: 0, height: 4},
            shadowRadius: 0.3,
            shadowColor: 'red',
            shadowOpacity: 0.4,
          }}>
          <Text>click</Text>
          {/* <Text>{props.label}</Text> */}
        </View>
      </TouchableOpacity>

      <FlatList
        data={data}
        // extraData={data}
        renderItem={({item, index}) => {
          // console.log(item);
          return (
            <View style={{borderWidth: 1}}>
              <Text>
                {item.id}. {item.title}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MiscOne;

const styles = StyleSheet.create({});

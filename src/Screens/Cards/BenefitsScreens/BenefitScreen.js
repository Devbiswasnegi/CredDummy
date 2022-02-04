import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';
import { continueStatement } from '@babel/types';
const BenefitScreen = () => {
  const press = () => {
    // const options = {
    //   method: 'GET',
    //   url: 'https://27coupons.p.rapidapi.com/coupons/popular/',
    //   params: {key: 'nye30a14KDwLNHEp5UJlHHhW28nlr59n'},
    //   headers: {
    //     'x-rapidapi-host': '27coupons.p.rapidapi.com',
    //     'x-rapidapi-key': '7ceabe5a61msh325763c10c15931p115f27jsn715ac41ea262',
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(response => response.data.json())
    //   .then(data => console.log(data))
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    // fetch(
    //   'https://27coupons.p.rapidapi.com/coupons/popular/?key=nye30a14KDwLNHEp5UJlHHhW28nlr59n',
    //   {
    //     method: 'GET',
    //     headers: {
    //       'x-rapidapi-host': '27coupons.p.rapidapi.com',
    //       'x-rapidapi-key':
    //         '7ceabe5a61msh325763c10c15931p115f27jsn715ac41ea262',
    //     },
    //   },
    // )
    //   .then(response => {
    //     response.json();
    //   })
    //   .then(text => console.log(text))
    //   .catch(err => {
    //     console.error(err);
    //   });
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "7ceabe5a61msh325763c10c15931p115f27jsn715ac41ea262"
	}
})
.then(response => response.json()).then(data=>console.log(data))
.catch(err => {
	console.error(err);
});
  };
  return (
    <SafeAreaView style={{}}>
      <Text onPress={press}>gsfsfsd</Text>
    </SafeAreaView>
  );
};

export default BenefitScreen;

const styles = StyleSheet.create({});


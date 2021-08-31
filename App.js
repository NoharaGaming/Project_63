import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component{
  render(){
    return(

      <View style={{flex:1}}>
          <TextInput
         style = {{color:"yellow"}}
        />




        <HomeScreen />
      </View>
    )
  }
}

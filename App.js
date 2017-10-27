/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBhsmodyCBlYqkCtBRRuxk9gdeCvi6WSfY",
  authDomain: "moonlit-vine-166508.firebaseapp.com",
  databaseURL: "https://moonlit-vine-166508.firebaseio.com",
  projectId: "moonlit-vine-166508",
  storageBucket: "moonlit-vine-166508.appspot.com",
  messagingSenderId: "97601910163"
};

let firebaseApp = firebase.initializeApp(config);

console.log(firebase);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

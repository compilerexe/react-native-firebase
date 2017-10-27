/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native'
import firebase from 'react-native-firebase'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu'
})

export default class App extends Component<{}> {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      ds: ds
    }
  }

  _updateDataSource (arr) {
    this.setState({dataSource: this.state.ds.cloneWithRows(arr)})
  }

  componentDidMount () {
    var that = this
    // let firebaseApp = firebase.initializeApp(config)
    // console.log(firebaseApp )
    // var defaultDatabase = firebase.database()
    // console.log(defaultDatabase)
    var sensorRef = firebase.database().ref('envisensor/chula/sensor')
    sensorRef.on('value', function (snapshot) {
      console.log(snapshot)
    })

    var natRef = firebase.database().ref('nat')
    natRef.on('value', function (snapshot) {
      const data = []
      snapshot.forEach(function (childSnapshot) {
        data.push(childSnapshot.key)
      })
      that._updateDataSource(data)
      // console.log(snapshot)
    })

    // sensorRef.
    //   firebase.auth().signInAnonymously()
    //     .then((user) => {
    //       console.log(user.isAnonymous)
    //     })
    // var rootRef = firebase.database().ref('nat/data')
    // rootRef.set('©2016 androidhive. All rights Reserved')

  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}

const
  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  })

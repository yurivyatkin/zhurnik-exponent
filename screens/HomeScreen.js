/**
 * @providesModule HomeScreen
 */

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Dashboard from 'Dashboard'
import TextPane from 'TextPane'

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Zhurnik',
      visible: false,
    },
  }

  render () {
    return (
      <View style={styles.container}>
        <Dashboard />
        <TextPane />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
})


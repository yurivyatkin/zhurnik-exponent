/**
 * @providesModule Dashboard
 */

import React from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Text>Date</Text>
      <Text>Search</Text>
      <Text>View</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboard: {
    alignItems: 'center',
    backgroundColor: '#aaa',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
  },
})

export default Dashboard

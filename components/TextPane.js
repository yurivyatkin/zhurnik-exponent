/**
 * @providesModule TextPane
 */

import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

const TextPane = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        multiline
        placeholder='Start writing here...'
        style={styles.textInput}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    textAlignVertical: 'top',
  },
})

export default TextPane

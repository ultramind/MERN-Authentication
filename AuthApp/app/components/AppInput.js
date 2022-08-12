import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'
import React from 'react'

const AppInput = ({placeholder, onChangeText, ...rest}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChangeText}
      {...rest}
    />
  )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: '#eae9e7',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
})

export default AppInput

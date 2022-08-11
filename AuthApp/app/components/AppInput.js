import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'
import React from 'react'

const AppInput = ({placeholder, ...rest}) => {
  return <TextInput placeholder={placeholder} {...rest} style={styles.input} />
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: '#eae9e7',
    marginTop: 20,
    paddingHorizontal: 15,
  },
})

export default AppInput

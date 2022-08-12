import {View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const FormNavigations = ({
  leftText,
  rightText,
  leftHandleAction,
  rightHandleAction,
}) => {
  return (
    <View style={styles.formLinks}>
      <Pressable onPress={leftHandleAction}>
        <Text>{leftText}</Text>
      </Pressable>
      <Pressable onPress={rightHandleAction}>
        <Text>{rightText}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  formLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
})

export default FormNavigations

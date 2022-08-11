import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FormNavigations = () => {
  return (
    <View style={styles.formLinks}>
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
      <Pressable>
        <Text>Forgot Password</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  formLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
})

export default FormNavigations

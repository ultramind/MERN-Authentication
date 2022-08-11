import React from 'react'
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native'

function FormContainer ({children}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: height * 0.15,
  },
})

export default FormContainer

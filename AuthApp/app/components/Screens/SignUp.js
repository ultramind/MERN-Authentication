import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const navigation = useNavigation()
  
  const navigateToLogin = () => {
    navigation.navigate('Login')
  }

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }
  return (
    <FormContainer>
      <AppInput placeholder='Firstname Lastname' />
      <AppInput placeholder='example1234@gmail.com' />
      <AppInput placeholder='*********' />
      <AppButton title='SignUp' />

      <FormNavigations
        leftText='Login'
        leftHandleAction={navigateToLogin}
        rightText='Forgot Password'
        rightHandleAction={navigateToForgotPassword}
      />
    </FormContainer>
  )
}

export default SignUp

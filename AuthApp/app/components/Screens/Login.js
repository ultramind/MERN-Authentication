import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import {useNavigation} from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  const navigateToSignup = () => {
    navigation.navigate('SignUp')
  }

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  return (
    <FormContainer>
      <AppInput placeholder='example1234@gmail.com' />
      <AppInput placeholder='*********' />
      <AppButton title='Login' />

      <FormNavigations
        leftText='Sign up'
        leftHandleAction={navigateToSignup}
        rightText='Forgot Password'
        rightHandleAction={navigateToForgotPassword}
      />
    </FormContainer>
  )
}

export default Login

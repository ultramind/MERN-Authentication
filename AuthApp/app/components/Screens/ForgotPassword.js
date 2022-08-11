import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation = useNavigation()

  const navigateToLogin = () => {
    navigation.navigate('Login')
  }

  const navigateToSignup = () => {
    navigation.navigate('SignUp')
  }
  return (
    <FormContainer>
      <AppInput placeholder='example1234@gmail.com' />
      <AppButton title='Send Link' />

      <FormNavigations
        leftHandleAction={navigateToSignup}
        leftText='Sign up'
        rightText='Login'
        rightHandleAction={navigateToLogin}
      />
    </FormContainer>
  )
}

export default ForgotPassword

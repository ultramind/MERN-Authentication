import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'

const Login = () => {
  return (
    <FormContainer>
      <AppInput placeholder='example1234@gmail.com' />
      <AppInput placeholder='*********' />
      <AppButton title='Login' />

      <FormNavigations leftText='Sign up' rightText='Forgot Password' />
    </FormContainer>
  )
}

export default Login

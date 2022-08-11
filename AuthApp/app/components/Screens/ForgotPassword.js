import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'

const ForgotPassword = () => {
  return (
    <FormContainer>
      <AppInput placeholder='example1234@gmail.com' />
      <AppButton title='Send Link' />

      <FormNavigations leftText='Sign up' rightText='Login' />
    </FormContainer>
  )
}

export default ForgotPassword

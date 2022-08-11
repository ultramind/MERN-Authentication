import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'

const SignUp = () => {
  return (
    <FormContainer>
      <AppInput placeholder='Firstname Lastname' />
      <AppInput placeholder='example1234@gmail.com' />
      <AppInput placeholder='*********' />
      <AppButton title='SignUp' />
    </FormContainer>
  )
}

export default SignUp

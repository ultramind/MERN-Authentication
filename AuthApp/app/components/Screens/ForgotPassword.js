import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import {useNavigation} from '@react-navigation/native'
import * as yup from 'yup'
import CustomFormik from '../CustomFormik'

const initialValues = {
  email: '',
}

// Formik schema
const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Invalid email address!')
    .required('Email feild required!'),
})

const ForgotPassword = () => {
  const navigation = useNavigation()

  const navigateToLogin = () => {
    navigation.navigate('Login')
  }

  const navigateToSignup = () => {
    navigation.navigate('SignUp')
  }

  const handleForgotPassword = (values, formikActions) => {
    console.log('====================================')
    console.log(values)
    console.log('====================================')
  }

  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleForgotPassword}
      >
        <AppInput name='email' placeholder='example1234@gmail.com' />
        <AppButton title='Send Link' />

        <FormNavigations
          leftHandleAction={navigateToSignup}
          leftText='Sign up'
          rightText='Login'
          rightHandleAction={navigateToLogin}
        />
      </CustomFormik>
    </FormContainer>
  )
}

export default ForgotPassword

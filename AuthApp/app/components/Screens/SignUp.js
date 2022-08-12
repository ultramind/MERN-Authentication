import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import {useNavigation} from '@react-navigation/native'
import CustomFormik from '../CustomFormik'

import {Formik} from 'formik'
import * as yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

// Formik schema
const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Name feild required!'),
  email: yup
    .string()
    .trim()
    .email('Invalid email address!')
    .required('Email feild required!'),
  password: yup
    .string()
    .trim()
    .min(4, 'Password must be more than 4 characters')
    .required('Password is required!'),
})

// Signup handler
const handleSignup = values => {}

const SignUp = () => {
  const navigation = useNavigation()

  const navigateToLogin = () => {
    navigation.navigate('Login')
  }

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const handleSignup = (values, formikActions) => {
    setTimeout(() => {
      console.log('====================================')
      console.log(values, formikActions)
      console.log('====================================')
      formikActions.resetForm()
      formikActions.setSubmitting(false)
    }, 3000)
  }
  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        <AppInput name='name' placeholder='Firstname Lastname' />
        <AppInput name='email' placeholder='example1234@gmail.com' />
        <AppInput secureTextEntry name='password' placeholder='*********' />
        <AppButton title='SignUp' />

        <FormNavigations
          leftText='Login'
          leftHandleAction={navigateToLogin}
          rightText='Forgot Password'
          rightHandleAction={navigateToForgotPassword}
        />
      </CustomFormik>
    </FormContainer>
  )
}

export default SignUp

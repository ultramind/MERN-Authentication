import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import {useNavigation} from '@react-navigation/native'

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
    console.log('====================================')
    console.log(values)
    console.log('====================================')
  }
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        {({
          errors,
          values,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          console.log('====================================')
          console.log(errors, values)
          console.log('====================================')
          return (
            <>
              <Text>{touched.name && errors.name ? errors.name : ''}</Text>
              <AppInput
                onChangeText={handleChange('name')}
                placeholder='Firstname Lastname'
                onBlur={handleBlur('name')}
              />
              <Text>{touched.email && errors.email ? errors.email : ''}</Text>
              <AppInput
                onChangeText={handleChange('email')}
                placeholder='example1234@gmail.com'
                onBlur={handleBlur('email')}
              />
              <Text>
                {touched.password && errors.password ? errors.password : ''}
              </Text>
              <AppInput
                onChangeText={handleChange('password')}
                placeholder='*********'
                onBlur={handleBlur('password')}
              />
              <AppButton onSubmit={handleSubmit} title='SignUp' />

              <FormNavigations
                leftText='Login'
                leftHandleAction={navigateToLogin}
                rightText='Forgot Password'
                rightHandleAction={navigateToForgotPassword}
              />
            </>
          )
        }}
      </Formik>
    </FormContainer>
  )
}

export default SignUp

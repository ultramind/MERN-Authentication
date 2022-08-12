import {View, Text} from 'react-native'
import React from 'react'
import FormContainer from '../FormContainer'
import AppInput from '../AppInput'
import AppButton from '../AppButton'
import FormNavigations from '../FormNavigations'
import {useNavigation} from '@react-navigation/native'
import CustomFormik from '../CustomFormik'
import * as yup from 'yup'


const initialValues = {
  email: '',
  password: '',
}

// Formik schema
const validationSchema = yup.object({
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

const Login = () => {
  const navigation = useNavigation()

  const navigateToSignup = () => {
    navigation.navigate('SignUp')
  }

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const handleLogin = (values, formikActions) =>{
    console.log('====================================');
    console.log(values);
    console.log('====================================');
  }

  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <AppInput name='email' placeholder='example1234@gmail.com' />
        <AppInput secureTextEntry name='password' placeholder='*********' />
        <AppButton title='Login' />

        <FormNavigations
          leftText='Sign up'
          leftHandleAction={navigateToSignup}
          rightText='Forgot Password'
          rightHandleAction={navigateToForgotPassword}
        />
      </CustomFormik>
    </FormContainer>
  )
}

export default Login

import React from 'react'
import {Text, View} from 'react-native'
import AppButton from './app/components/AppButton'
import AppInput from './app/components/AppInput'
import FormContainer from './app/components/FormContainer'
import ForgotPassword from './app/components/Screens/ForgotPassword'
import Login from './app/components/Screens/Login'
import SignUp from './app/components/Screens/SignUp'
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './app/navigations/AuthNavigator'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, background: '#fff'},
  }
  return (
    <NavigationContainer theme={theme}>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default App

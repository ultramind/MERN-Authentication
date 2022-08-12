import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'
import React from 'react'
import {useFormikContext} from 'formik'

const AppInput = ({placeholder, name, ...rest}) => {
  const {errors, values, touched, handleChange, handleBlur} = useFormikContext()

  // reference
  const error = errors[name]
  const value = values[name]
  const isTouched = touched[name]

  return (
    <>
      {isTouched && error ? (
        <Text style={{color: 'red', paddingVertical: 6}}>{error}</Text>
      ) : null}
      <TextInput
        name={name}
        value={value}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...rest}
      />
    </>
  )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: '#eae9e7',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
})

export default AppInput

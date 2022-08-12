import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native'
import React from 'react'
import {useFormikContext} from 'formik'
import {text} from 'express'

const AppButton = ({title}) => {
  const {handleSubmit, isSubmitting} = useFormikContext()
  return (
    <Pressable style={styles.btn} onPress={handleSubmit}>
      <Text style={styles.btnText}>
        {isSubmitting ? 'Submiting...' : title}
      </Text>
    </Pressable>
  )
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  btn: {
    width: width - 40,
    height: 50,
    marginTop: 20,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 24,
  },
})

export default AppButton

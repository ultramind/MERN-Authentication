import {View, Text} from 'react-native'
import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'

const CustomFormik = ({
  children,
  onSubmit,
  initialValues,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return children
      }}
    </Formik>
  )
}

export default CustomFormik

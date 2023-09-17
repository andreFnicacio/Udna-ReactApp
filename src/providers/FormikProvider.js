import { useFormik } from 'formik';
import propTypes from 'prop-types';
import React, { createContext, useContext, useMemo } from 'react';

const FormikContext = createContext();

const FormikProvider = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    handleChange,
    handleBlur,
    handleSubmit,
    submitForm,
    validateField,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnChange: true,
    validateOnMount: true,
  });

  const defaultContext = useMemo(() => ({
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    handleChange,
    handleBlur,
    handleSubmit,
    submitForm,
    validateField,
  }), [values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    handleChange,
    handleBlur,
    handleSubmit,
    submitForm,
    validateField,
  ]);

  return (
    <FormikContext.Provider value={defaultContext}>
      {children}
    </FormikContext.Provider>
  );
};

const useFormikForm = () => useContext(FormikContext);

FormikProvider.propTypes = {
  children: propTypes.node.isRequired,
  initialValues: propTypes.shape().isRequired,
  validationSchema: propTypes.shape().isRequired,
  onSubmit: propTypes.func.isRequired,
};

export { FormikProvider, useFormikForm };

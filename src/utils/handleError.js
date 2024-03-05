/**
 * Handles errors from two differnt sources (network and local form)
 * @param {*} state - app state
 * @param {*} formikProps - props from formik
 * @param {*} field - field name
 * @returns
 */
const handleError = (state, formikProps, field) => {
  if (!state.errors) {
    return null;
  }

  if (state?.errors[field]) {
    return state.errors[field];
  }

  if (formikProps?.errors[field] && formikProps?.touched[field]) {
    return formikProps.errors[field];
  }

  return null;
};

export default handleError;

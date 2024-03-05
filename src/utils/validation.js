/**
 * Login page validation
 * @param {*} values 
 * @param {*} initialLoginPress 
 * @returns {}
 */
export const validateLogin = (values, initialLoginPress) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password && initialLoginPress) {
    errors.password = "Password is required";
  }

  return errors;
};

/**
 * Validates only email field email
 * @param {*} values 
 * @returns {}
 */
export const validateEmail = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

/**
 * Validates two passwords during set new password screen
 * @param {*} values
 * @returns {}
 */
export const validatePasswords = ({password, password_confirm}) => {
  const errors = {};

  if(!password) {
    errors.password = "This field can't be empty"
  }

  if(!password_confirm) {
    errors.password_confirm = "This field can't be empty"
  }

  if(password !== password_confirm) {
    errors.password_confirm = "Passwords don't match"
  }

  return errors
}
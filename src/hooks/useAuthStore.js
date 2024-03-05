import { create } from "zustand";
import axios from "axios";
import { LOGIN_URL, PASSWORD_RESET_URL, PASSWORD_SET_URL } from "../config";

// Default state for errors
const errorsDefaultState = { hasFailed: false, errors: {}, message: "" };

// Create Auth store
const useAuthStore = create((set, get) => ({
  // Set initial data
  accessToken: null,
  refreshToken: null,

  showPassword: false,
  initialLoginPress: false,

  loginState: errorsDefaultState,
  setPassState: errorsDefaultState,
  resetPassState: errorsDefaultState,

  // small helper to reset all error state
  resetErrors: () =>
    set(() => ({
      loginState: errorsDefaultState,
      setPass: errorsDefaultState,
      resetPassState: errorsDefaultState,
    })),

  // Submit handler for password reset
  onPasswordResetSubmit: (values, navigate) => {
    // set set password page as redirect url
    const redirect_url = `${window.location.origin}/new`;

    get().resetErrors();
    axios({
      method: "POST",
      url: PASSWORD_RESET_URL,
      data: { ...values, redirect_url },
    })
      .then((response) => {
        // if success, redirect to new page
        navigate("/new");
        console.log(response);
      })
      .catch(({ response: { data } }) => {
        // eslint-disable-next-line
        const { err, detail } = data;
        // set errors to show to user if there are any
        set((state) => ({
          resetPassState: {
            ...state.loginState,
            hasFailed: true,
            errors: { email: detail },
          },
        }));
      });
  },

  onPasswordSetSubmit: (values, navigate) => {
    get().resetErrors();
    axios({
      method: "POST",
      url: PASSWORD_SET_URL,
      // Don't have actual data on token and secret. Documentation says it comes in URL, but can't test it
      data: { ...values, token: "test_token", secret: "test_token" },
    })
      .then((response) => {
        // if attempt was successful - redirect to login
        navigate('/')
      })
      .catch(({ response: { data } }) => {
        // eslint-disable-next-line
        const { err, detail } = data;
        console.log(data);
        // check if we have singular or multiple errors
        if (Array.isArray(detail)) {
          const errors = {};
          // add all errors to error state, so we can show them on UI
          detail.forEach((errorDetail) => {
            errors[errorDetail.field_name] = errorDetail.error;
          });

          set((state) => ({
            // update set password ui state
            setPassState: { ...state.setPassState, hasFailed: true, errors },
          }));
        } else {
          // if it's singular error - we only save message for UI
          set((state) => ({
            setPassState: {
              ...state.loginState,
              hasFailed: true,
              message: detail,
            },
          }));
        }
      });
  },

  // UI helper to show password field when user clicks login first time
  setInitialLoginPress: () => set(() => ({ initialLoginPress: true })),

  toggleShowPassword: () =>
    set((state) => ({ showPassword: !state.showPassword })),

  // Login submit handler.
  onLoginSubmit: (values) => {
    // User is shown only email field, that means he hasn't entered password yet
    if (!get().initialLoginPress) {
      // Show password input field for user
      get().setInitialLoginPress();
      return;
    }
    // if user entererd password and it was validated - proceed to login action
    get().login(values);
  },

  // login action
  login: (values) => {
    get().resetErrors();
    axios({ method: "POST", url: LOGIN_URL, data: values })
      .then(({ response: { data } }) => {
        set(() => ({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        }));
      })
      .catch(({ response: { data } }) => {
        // eslint-disable-next-line
        const { err, detail } = data;

        if (Array.isArray(detail)) {
          const errors = {};

          detail.forEach((errorDetail) => {
            errors[errorDetail.field_name] = errorDetail.error;
          });

          set((state) => ({
            loginState: { ...state.loginState, hasFailed: true, errors },
          }));
        } else {
          set((state) => ({
            loginState: {
              ...state.loginState,
              hasFailed: true,
              message: detail,
            },
          }));
        }
      });
  },
}));

export default useAuthStore;

import { Formik, Form } from "formik";
import useAuthStore from "../../hooks/useAuthStore";
import { useShallow } from "zustand/react/shallow";
import Link from "../../components/Link";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputGroup from "../InputGroup";
import { validateLogin } from "../../utils/validation";
import handleError from "../../utils/handleError";
import Error from "../Error";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { initialLoginPress, onSubmit, loginState } = useAuthStore(
    useShallow((state) => ({
      initialLoginPress: state.initialLoginPress,
      onSubmit: state.onLoginSubmit,
      loginState: state.loginState,
    })),
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(values) => validateLogin(values, initialLoginPress)}
    >
      {(formikProps) => (
        <Form>
          <InputGroup>
            <Input
              id="email"
              name="email"
              placeholder="Work Email"
              type="email"
              required
              error={handleError(loginState, formikProps, "email")}
            />

            {initialLoginPress && (
              <>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  error={handleError(loginState, formikProps, "password")}
                />
                {loginState.message && <Error text={loginState.message} />}
                <Link to="/forgot" alignRight>
                  {"Forgot your password?"}
                </Link>
              </>
            )}

            <Button text="Log in to Qencode" type="submit" primary />
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

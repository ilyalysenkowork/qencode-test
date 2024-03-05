import { Formik, Form } from "formik";
import InputGroup from "../InputGroup";
import Input from "../Input";
import Button from "../Button";
import styles from "./forms.module.css";
import { validateEmail } from "../../utils/validation";
import useAuthStore from "../../hooks/useAuthStore";
import { useShallow } from "zustand/react/shallow";
import { useNavigate } from "react-router-dom";
import Error from "../Error";
import handleError from "../../utils/handleError";

const initialValues = {
  email: "",
};

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const { onSubmit, resetPassState } = useAuthStore(
    useShallow((state) => ({
      onSubmit: state.onPasswordResetSubmit,
      resetPassState: state.resetPassState,
    })),
  );
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values, navigate);
      }}
      validate={validateEmail}
    >
      {(formikProps) => (
        <Form>
          <InputGroup className={styles.form}>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              error={handleError(resetPassState, formikProps, "email")}
            />
            {resetPassState.message && <Error text={resetPassState.message} />}

            <Button className={styles.send} text="Send" type="submit" primary />
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;

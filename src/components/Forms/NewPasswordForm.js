import { Formik, Form } from "formik";
import { useShallow } from "zustand/react/shallow";
import InputGroup from "../InputGroup";
import Input from "../Input";
import Button from "../Button";
import styles from "./forms.module.css";
import { validatePasswords } from "../../utils/validation";
import handleError from "../../utils/handleError";
import useAuthStore from "../../hooks/useAuthStore";
import Error from "../Error";
import Link from "../Link";

const initialValues = {
  password: "",
  password_confirm: "",
};

const NewPasswordForm = () => {
  const { onSubmit, setPassState } = useAuthStore(
    useShallow((state) => ({
      onSubmit: state.onPasswordSetSubmit,
      setPassState: state.setPassState,
    }))
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validatePasswords}
    >
      {(formikProps) => (
        <Form>
          <InputGroup className={styles.form}>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              label={"Password"}
              type="password"
              error={handleError(setPassState, formikProps, "password")}
            />

            <Input
              id="password_confirm"
              name="password_confirm"
              placeholder="Password"
              label={"New Password"}
              type="password"
              error={handleError(setPassState, formikProps, "password_confirm")}
            />

            {setPassState.message && <Error text={setPassState.message} />}

            <Button className={styles.send} text="Send" type="submit" primary />

            {setPassState.message && (
              <Link to="/">
                <Button text="Cancel" />
              </Link>
            )}
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default NewPasswordForm;

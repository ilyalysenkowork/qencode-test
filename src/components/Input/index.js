import { Field } from "formik";
import styles from "./input.module.css";
import Error from "../Error";

const Input = ({ label, containerClass, error, ...props }) => {
  return (
    <div className={styles.wrap}>
      {label && (<label className={styles.label} htmlFor={props.name}>{label}</label>)}
      <Field className={styles.input} {...props} />
      <Error text={error}/>
    </div>
  );
};

export default Input;

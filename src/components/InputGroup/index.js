import styles from "./inputgroup.module.css";
import cx from 'classnames'

const InputGroup = ({ children, className}) => {
  return (
    <div className={cx(className ?? "", styles.wrap)}> {children} </div>
  );
};

InputGroup.defaultProps = {
  initialValues: {},
  onSubmit: () => {},
  className: ""
}

export default InputGroup;

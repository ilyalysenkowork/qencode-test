import styles from "./button.module.css";
import cx from "classnames";

const Button = ({ primary, text, children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cx(className ?? "", styles.btn, { [styles.primary]: primary })}
      {...props}
    >
      {children ? children : text}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  text: "",
  children: "",
  onClick: () => {},
};

export default Button;

import { Link as RouterLink } from "react-router-dom";
import styles from "./link.module.css";
import cx from 'classnames'

const Link = ({children, to, alignRight}) => {
  return (
    <RouterLink className={cx(styles.link, {[styles.right]: alignRight})} to={to}>
      {children}
    </RouterLink>
  );
};

Link.defaultProps = {
  text: "",
  link: "",
  alignRight: false
};

export default Link;

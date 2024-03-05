import styles from './divider.module.css'

const Divider = ({ text }) => {
  return <div className={styles.divider}>{text}</div>;
};

Divider.defaultProps = {
  text: "or",
};

export default Divider;

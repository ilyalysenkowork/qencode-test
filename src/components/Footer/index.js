import styles from "./footer.module.css";

const Footer = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;

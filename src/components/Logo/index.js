import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.wrap}>
      <img src="logo.svg" alt="alt" width={"178.09px"} height={"39px"} />
    </div>
  );
};

export default Logo;

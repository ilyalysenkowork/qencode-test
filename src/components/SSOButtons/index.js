import Button from "../Button";
import Icon from "../Icon";
import styles from "./ssobuttons.module.css";

const SSOButtons = () => {
  return (
    <div className={styles.wrap}>
      <Button>
        <Icon icon="google" /> Google{" "}
      </Button>
      <Button>
        <Icon icon="github" /> Github{" "}
      </Button>
    </div>
  );
};

export default SSOButtons;

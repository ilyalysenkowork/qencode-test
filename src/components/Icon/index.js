import styles from "./icon.module.css";

const icons = {
  github: "/icons/github.svg",
  google: "/icons/google.svg",
};

const Icon = ({ icon, width, height }) => {
  const src = icons[icon] ?? "google";

  return (
    <img
      alt={icon}
      className={styles.icon}
      src={src}
      width={width}
      height={height}
    />
  );
};

Icon.defaultProps = {
  width: "18px",
  height: "18px",
  icon: "google",
};

export default Icon;

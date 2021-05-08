import styles from "./styles.module.scss";

export type PHButtonTypeProps = "primary" | "primary-outline";

export type PHButtonProps = {
  type: PHButtonTypeProps;
  label?: string;
  icon?: string;
  click: () => any;
};

export default function PHButton({ type, label, icon, click }: PHButtonProps) {
  return (
    <button className={`${styles[type]} ${styles.button}`} onClick={click}>
      {icon && <i className={icon}></i>}
      {label}
    </button>
  );
}

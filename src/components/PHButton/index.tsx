import styles from "./styles.module.scss";

export type PHButtonTypeProps = "primary" | "primary-outline";

export type PHButtonProps = {
  type: PHButtonTypeProps;
  label: string;
  click: () => any;
};

export default function PHButton({ type, label, click }: PHButtonProps) {
  return (
    <button className={`${styles[type]} ${styles.button}`} onClick={click}>
      {label}
    </button>
  );
}

import styles from "./styles.module.scss";
import Link from "next/link";

export default function PHFWebName() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar} />
      </div>
      <h1 className={styles.title}>PEDRO HENRIQUE</h1>
      <h2 className={styles.subtitle}>Front-end Developer</h2>
    </div>
  );
}

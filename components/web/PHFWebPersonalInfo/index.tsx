import styles from "./styles.module.scss";
import Link from "next/link";

export default function PHFWebPersonalInfo() {
  return (
    <div className={styles.container}>
      <p>25 anos</p>
      <p>April 15, 1996</p>
      <p>pedro.phdois@gmail.com</p>
      <p>(48) 991691208</p>
    </div>
  );
}

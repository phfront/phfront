import { useContext } from "react";
import { DataContext } from "../../../context/data";
import styles from "./styles.module.scss";

export default function PHFWebName() {
  const { data } = useContext(DataContext);
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar} />
      </div>
      <h1 className={styles.title}>{data.name}</h1>
      <h2 className={styles.subtitle}>{data.headline}</h2>
    </div>
  );
}

import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import styles from "./styles.module.scss";

export default function PHFWebName() {
  const { data } = useContext(DataContext);
  const { getText } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar} />
      </div>
      <h1 className={styles.title}>{data.name}</h1>
      <h2 className={styles.subtitle}>{getText(data.headline)}</h2>
    </div>
  );
}

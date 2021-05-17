import styles from "./styles.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../../context/data";

export default function PHFHeader() {
  const { data } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar} />
          <i className="fas fa-user-circle" />
        </div>
        <h1 className={styles.title}>{data.name}</h1>
        <h2 className={styles.subtitle}>{data.headline}</h2>
        <div className={styles.social}>
          {
            data.social.mobile.map((social, index) => (
              <Link href={social.url} key={index}>
                <a target="_blank">
                  <i className={`${social.icon} ${styles.icon} ${styles['icon' + index]}`} />
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

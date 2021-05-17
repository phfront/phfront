import styles from "./styles.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../../context/data";

export default function PHFWebSocial() {
  const { data } = useContext(DataContext);

  return (
    <div className={styles.social}>
      {data.social.web.map((social, index) => (
        <Link href={social.url} key={index}>
          <a target="_blank">
            <i className={social.icon} />
          </a>
        </Link>
      ))}
    </div>
  );
}

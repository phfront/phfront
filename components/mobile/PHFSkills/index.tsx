import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import styles from "./styles.module.scss";

export default function PHFSkills() {
  const { data } = useContext(DataContext);
  const { getText } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getText("SKILLS")}</h1>
      <div className={styles.skills}>
        {
          data.skills.main.map((skillIcon, index) => (
            <i className={skillIcon} key={index} />
          ))
        }
      </div>
      <i className={`${styles.more} fas fa-ellipsis-h`} />
    </div>
  );
}

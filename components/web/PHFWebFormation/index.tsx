import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import { formatDate } from "../../../shared/formatDate";
import styles from "./styles.module.scss";

export default function PHFWebFormation() {
  const { data } = useContext(DataContext);
  const { getText, lang } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getText("FORMATION")}</h1>
      {data.formation.map((institution, index) => (
        <div className={styles.institution} key={index}>
          <p>{institution.institution}</p>
          <span>{getText(institution.course)}</span>
          <span>
            {`${formatDate(institution.start, lang, "LLL y")} - ${formatDate(institution.end, lang, "LLL y")}`}
          </span>
        </div>
      ))}
    </div>
  );
}

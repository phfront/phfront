import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import { formatDate } from "../../../shared/formatDate";
import LineTitle from "../../base/LineTitle";
import styles from "./styles.module.scss";

export default function PHFFormation() {
  const { data } = useContext(DataContext);
  const { getText, lang } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <LineTitle label={getText("FORMATION")} />
      {data.formation.map((institution, index) => (
        <div className={styles.education} key={index}>
          <p>{institution.institution}</p>
          <span>{getText(institution.course)}</span>
          <span>
            {`${formatDate(institution.start, lang, "LLL y")} - ${formatDate(
              institution.end,
              lang,
              "LLL y"
            )}`}
          </span>
        </div>
      ))}
    </div>
  );
}

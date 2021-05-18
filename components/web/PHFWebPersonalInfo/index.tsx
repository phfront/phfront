import styles from "./styles.module.scss";
import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { parseISO, differenceInYears } from "date-fns";
import { I18nContext } from "../../../context/i18n";
import { formatDate } from "../../../shared/formatDate";

export default function PHFWebPersonalInfo() {
  const { data } = useContext(DataContext);
  const { getText, lang } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <p>{`${differenceInYears(
        new Date(),
        parseISO(data.detail.birthdate)
      )} ${getText("YEARS")}`}</p>
      <p>{formatDate(data.detail.birthdate, lang)}</p>
      <p>{data.detail.email}</p>
      <p>{data.detail.phone}</p>
    </div>
  );
}

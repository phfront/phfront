import { format, parseISO } from "date-fns";
import { useContext } from "react";
import Flickity from "react-flickity-component";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import { formatDate } from "../../../shared/formatDate";
import styles from "./styles.module.scss";

export default function PHFWebEmploymentHistory() {
  const { data } = useContext(DataContext);
  const { getText, lang } = useContext(I18nContext);

  const formatEnd = (endDate: string) =>
    endDate ? formatDate(endDate, lang, "LLL y") : getText("CURRENT");

  function Companies() {
    return (
      <Flickity
        options={{
          autoPlay: true,
          prevNextButtons: false,
          resize: true,
        }}
      >
        {data.employment_history.map((company, index) => (
          <div className={styles.company} key={index}>
            <img className={styles.logo} src={company.logo_web} />
            <div className={styles.position}>
              <p>{company.name}</p>
              <span>{getText(company.headline)}</span>
              <span>
                {formatDate(company.start, lang, "LLL y")} -{" "}
                {formatEnd(company.end)}
              </span>
            </div>
            {/* <i className={`${styles.more} fas fa-ellipsis-h`} /> */}
          </div>
        ))}
      </Flickity>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getText("EMPLOYMENT_HISTORY")}</h1>
      <div className={styles.companies}>
        <Companies />
      </div>
    </div>
  );
}

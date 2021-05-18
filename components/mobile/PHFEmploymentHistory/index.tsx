import styles from "./styles.module.scss";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import LineTitle from "../../base/LineTitle";
import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import { I18nContext } from "../../../context/i18n";
import { formatDate } from "../../../shared/formatDate";

export default function PHFEmploymentHistory() {
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
            <img className={styles.logo} src={company.logo} />
            <div className={styles.position}>
              <p>{company.name}</p>
              <span>{getText(company.headline)}</span>
              <span>
                {formatDate(company.start, lang, "LLL y")} -{" "}
                {formatEnd(company.end)}
              </span>
            </div>
            <i className={`${styles.more} fas fa-ellipsis-h`} />
          </div>
        ))}
      </Flickity>
    );
  }

  return (
    <div className={styles.container}>
      <LineTitle label={getText("EMPLOYMENT_HISTORY")} />
      <Companies />
    </div>
  );
}

import { format, parseISO } from "date-fns";
import { useContext } from "react";
import Flickity from "react-flickity-component";
import { DataContext } from "../../../context/data";
import styles from "./styles.module.scss";

export default function PHFWebEmploymentHistory() {
  const { data } = useContext(DataContext);

  const formatEnd = (endDate: string) => endDate ? format(parseISO(endDate), "LLL y") : 'Current';

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
              <span>{company.headline}</span>
              <span>{format(parseISO(company.start), "LLL y")} - {formatEnd(company.end)}</span>
            </div>
            <i className={`${styles.more} fas fa-ellipsis-h`} />
          </div>
        ))}
      </Flickity>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>EMPLOYMENT HISTORY</h1>
      <div className={styles.companies}>
        <Companies />
      </div>
    </div>
  );
}

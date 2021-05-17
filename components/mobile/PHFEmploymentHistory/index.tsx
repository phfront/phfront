import styles from "./styles.module.scss";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import LineTitle from "../../base/LineTitle";
import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";

export default function PHFEmploymentHistory() {
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
        {
          data.employment_history.map((company, index) => (
            <div className={styles.company}>
              <img className={styles.logo} src={company.logo} />
              <div className={styles.position}>
                <p>{company.name}</p>
                <span>{company.headline}</span>
                <span>{format(parseISO(company.start), "LLL y")} - {formatEnd(company.end)}</span>
              </div>
              <i className={`${styles.more} fas fa-ellipsis-h`} />
            </div>
          ))
        }
      </Flickity>
    );
  }

  return (
    <div className={styles.container}>
      <LineTitle label="Employment History" />
      <Companies />
    </div>
  );
}

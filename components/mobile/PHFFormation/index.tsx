import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import { useContext } from "react";
import { DataContext } from "../../../context/data";
import LineTitle from "../../base/LineTitle";
import styles from "./styles.module.scss";

export default function PHFFormation() {
  const { data } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <LineTitle label="Education" />
      {
        data.formation.map((institution, index) => (
          <div className={styles.education}>
            <p>{institution.institution}</p>
            <span>{institution.course}</span>
            <span>{format(parseISO(institution.start), "LLL y")} - {format(parseISO(institution.start), "LLL y")}</span>
          </div>
        ))
      }
    </div>
  );
}

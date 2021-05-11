import LineTitle from "../base/LineTitle";
import styles from "./styles.module.scss";

export default function PHFEducation() {
  return (
    <div className={styles.container}>
      <LineTitle label="Education" />
      <div className={styles.education}>
        <p>FATEC SJC</p>
        <span>System Analysis and Development</span>
        <span>Jan 2014 - Jan 2017</span>
      </div>
      <div className={styles.education}>
        <p>ECOMPO</p>
        <span>Information Technology Technician</span>
        <span>Jan 2011 - Dec 2013</span>
      </div>
    </div>
  );
}

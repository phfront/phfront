import styles from "./styles.module.scss";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import LineTitle from "../base/LineTitle";

export default function PHFEmploymentHistory() {
  const flickityOptions = {
    initialIndex: 2,
  };

  function Companies() {
    return (
      <Flickity
        options={{
          autoPlay: false,
          prevNextButtons: false,
          resize: true,
        }}
      >
        <div className={styles.company}>
          <img className={styles.logo} src="/svg/qintess.svg" />
          <div className={styles.position}>
            <p>Qintess</p>
            <span>Senior Front-end</span>
            <span>Nov 2019 - Current</span>
          </div>
          <i className={`${styles.more} fas fa-ellipsis-h`} />
        </div>
        <div className={styles.company}>
          <img className={styles.logo} src="/svg/qintess.svg" />
          <div className={styles.position}>
            <p>Qintess</p>
            <span>Senior Front-end</span>
            <span>Nov 2019 - Current</span>
          </div>
          <i className={`${styles.more} fas fa-ellipsis-h`} />
        </div>
        <div className={styles.company}>
          <img className={styles.logo} src="/svg/qintess.svg" />
          <div className={styles.position}>
            <p>Qintess</p>
            <span>Senior Front-end</span>
            <span>Nov 2019 - Current</span>
          </div>
          <i className={`${styles.more} fas fa-ellipsis-h`} />
        </div>
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

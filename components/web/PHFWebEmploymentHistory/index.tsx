import Flickity from 'react-flickity-component';
import styles from './styles.module.scss';

export default function PHFWebEmploymentHistory() {
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
          <img className={styles.logo} src="/svg/qintess-web.svg" />
          <div className={styles.position}>
            <p>Qintess</p>
            <span>Senior Front-end</span>
            <span>Nov 2019 - Current</span>
          </div>
          <i className={`${styles.more} fas fa-ellipsis-h`} />
        </div>
        <div className={styles.company}>
          <img className={styles.logo} src="/svg/qintess-web.svg" />
          <div className={styles.position}>
            <p>Qintess</p>
            <span>Senior Front-end</span>
            <span>Nov 2019 - Current</span>
          </div>
          <i className={`${styles.more} fas fa-ellipsis-h`} />
        </div>
        <div className={styles.company}>
          <img className={styles.logo} src="/svg/qintess-web.svg" />
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
      <h1 className={styles.title}>EMPLOYMENT HISTORY</h1>
      <div className={styles.companies}>
        <Companies />
      </div>
    </div>
  );
}
import styles from "./styles.module.scss";

export default function PHFSkills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills}>
        <i className="fab fa-react" />
        <i className="fab fa-html5" />
        <i className="fab fa-js" />
        <i className="fab fa-css3-alt" />
        <i className="fab fa-angular" />
      </div>
      <i className={`${styles.more} fas fa-ellipsis-h`} />
    </div>
  );
}

import styles from "./styles.module.scss";

export default function PHFWebPersonalProjects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PERSONAL PROJECTS</h1>
      <div className={styles.projects}>
        <div className={styles.project}>
          <i className="fab fa-spotify" />
          <p>Atemsfy</p>
        </div>
        <div className={styles.project}>
          <i className="fas fa-weight" />
          <p>Weigth</p>
          <p>Control</p>
        </div>
        <div className={styles.project}>
          <i className="fas fa-coins" />
          <p>FinCon</p>
        </div>
      </div>
    </div>
  );
}

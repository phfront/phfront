import styles from "./styles.module.scss";

export default function PHFHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar} />
          <i className="fas fa-user-circle" />
        </div>
        <h1 className={styles.title}>PEDRO HENRIQUE</h1>
        <h2 className={styles.subtitle}>Front-end Developer</h2>
        <div className={styles.social}>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-whatsapp" />
          <i className="fab fa-instagram" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-github" />
        </div>
      </div>
    </div>
  );
}

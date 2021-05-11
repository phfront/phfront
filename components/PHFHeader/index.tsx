import styles from "./styles.module.scss";
import Link from "next/link";

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
          <Link href="https://www.facebook.com/le.pedro.derp">
            <a target="_blank" className={styles.facebook}>
              <i className="fab fa-facebook-f" />
            </a>
          </Link>
          <Link href="https://wa.me/554891691208">
            <a target="_blank" className={styles.whatsapp}>
              <i className="fab fa-whatsapp" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/pedro_atem/">
            <a target="_blank" className={styles.instagram}>
              <i className="fab fa-instagram" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/pedro-henrique-silva-rosa-94aa7a67/">
            <a target="_blank" className={styles.linkedin}>
              <i className="fab fa-linkedin-in" />
            </a>
          </Link>
          <Link href="https://github.com/phfront">
            <a target="_blank" className={styles.github}>
              <i className="fab fa-github" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

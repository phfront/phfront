import styles from './styles.module.scss';
import Link from "next/link";

export default function PHFWebSocial() {
  return (
    <div className={styles.social}>
      <Link href="https://www.facebook.com/le.pedro.derp">
        <a target="_blank" className={styles.facebook}>
          <i className="fab fa-facebook-square" />
        </a>
      </Link>
      <Link href="https://wa.me/554891691208">
        <a target="_blank" className={styles.whatsapp}>
          <i className="fab fa-whatsapp-square" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/pedro_atem/">
        <a target="_blank" className={styles.instagram}>
          <i className="fab fa-instagram-square" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/pedro-henrique-silva-rosa-94aa7a67/">
        <a target="_blank" className={styles.linkedin}>
          <i className="fab fa-linkedin" />
        </a>
      </Link>
      <Link href="https://github.com/phfront">
        <a target="_blank" className={styles.github}>
          <i className="fab fa-github-square" />
        </a>
      </Link>
    </div>
  )
}
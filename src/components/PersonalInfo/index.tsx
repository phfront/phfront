import PHButton from "../base/PHButton";
import styles from "./styles.module.scss";

export default function PersonalInfo() {
  return (
    <div className={styles.container}>
      <h1>PEDRO HENRIQUE SILVA ROSA</h1>
      <p>
        <i className="fas fa-birthday-cake"></i>
        <span>15/04/1996</span>
      </p>
      <p>
        <i className="fas fa-phone"></i>
        <span>(48) 999169-1208</span>
      </p>
      <p>
        <i className="fas fa-envelope"></i>
        <span>pedro.phdois@gmail.com</span>
      </p>
      <div className={styles.buttons}>
        <PHButton
          label="Whatsapp"
          icon="fab fa-whatsapp"
          type="primary-outline"
          click={() => window.open("https://wa.me/554891691208", "_black")}
        />
        <PHButton
          label="Github"
          icon="fab fa-github"
          type="primary"
          click={() => window.open("https://github.com/phfront", "_black")}
        />
        <PHButton
          label="Linkedin"
          type="primary-outline"
          icon="fab fa-linkedin"
          click={() =>
            window.open(
              "https://www.linkedin.com/in/pedro-henrique-silva-rosa-94aa7a67/",
              "_black"
            )
          }
        />
      </div>
    </div>
  );
}

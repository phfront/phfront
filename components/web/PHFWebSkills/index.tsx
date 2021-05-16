import styles from "./styles.module.scss";
import Link from "next/link";
import PHFButton from "../../base/PHFButton";

export default function PHFWebSkills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SKILLS</h1>
      <div className={styles.skills}>
        <i className="fab fa-html5" />
        <i className="fab fa-js" />
        <i className="fab fa-css3-alt" />
      </div>
      <div className={styles.skills}>
        <i className="fab fa-angular" />
        <i className="fab fa-react" />
      </div>
      <div className={styles.more}>
        <PHFButton
          label="See more"
          type="type4"
          variation="outline"
          click={() => {}}
        />
      </div>
    </div>
  );
}

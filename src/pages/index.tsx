import { useEffect, useState } from "react";
import PHButton from "../components/PHButton";
import styles from "./styles.module.scss";

function Home() {
  return (
    <section className={styles.container}>
      <h1>PEDRO HENRIQUE SILVA ROSA</h1>
      <PHButton
        label="Github"
        type="primary"
        click={() => window.open("https://github.com/phfront", "_black")}
      />
      <PHButton
        label="Linkedin"
        type="primary-outline"
        click={() =>
          window.open(
            "https://www.linkedin.com/in/pedro-henrique-silva-rosa-94aa7a67/",
            "_black"
          )
        }
      />
    </section>
  );
}

export default Home;

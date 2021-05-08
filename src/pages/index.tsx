import { useEffect, useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <section>
        <PersonalInfo />
      </section>
    </div>
  );
}

export default Home;

import PHFHeader from "../components/PHFHeader";
import PHFProjects from "../components/PHFProjects";
import PHFSkills from "../components/PHFSkills";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <section>
        <PHFHeader />
        <PHFSkills />
        <PHFProjects />
      </section>
    </div>
  );
}

export default Home;

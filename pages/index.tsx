import PHFEducation from "../components/PHFEducation";
import PHFEmploymentHistory from "../components/PHFEmploymentHistory";
import PHFHeader from "../components/PHFHeader";
import PHFProjects from "../components/PHFProjects";
import PHFSkills from "../components/PHFSkills";
import PHFWebContainer from "../components/web/PHFWebContainer";
import PHFWebEmploymentHistory from "../components/web/PHFWebEmploymentHistory";
import PHFWebFormation from "../components/web/PHFWebFormation";
import PHFWebName from "../components/web/PHFWebName";
import PHFWebPersonalInfo from "../components/web/PHFWebPersonalInfo";
import PHFWebPersonalProjects from "../components/web/PHFWebPersonalProjects";
import PHFWebSkills from "../components/web/PHFWebSkills";
import PHFWebSocial from "../components/web/PHFWebSocial";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.mobile}>
        <PHFHeader />
        <PHFSkills />
        <PHFProjects />
        <PHFEmploymentHistory />
        <PHFEducation />
      </section>
      <section className={styles.desktop}>
        <PHFWebContainer>
          <div className={styles.webContainer}>
            <div className={styles.webContainerCol}>
              <PHFWebName />
              <PHFWebPersonalInfo />
              <PHFWebSkills />
            </div>
            <div className={styles.webContainerCol}>
              <PHFWebEmploymentHistory />
              <PHFWebFormation />
              <PHFWebPersonalProjects />
            </div>
            <div className={styles.webContainerCol}>
              <PHFWebSocial />
            </div>
          </div>
        </PHFWebContainer>
      </section>
    </div>
  );
}

export default Home;

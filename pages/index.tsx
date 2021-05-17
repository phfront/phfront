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
              <div className={styles.webItem1}>
                <PHFWebName />
              </div>
              <div className={styles.webItem2}>
                <PHFWebPersonalInfo />
              </div>
              <div className={styles.webItem3}>
                <PHFWebSkills />
              </div>
            </div>
            <div className={styles.webContainerCol}>
              <div className={styles.webItem4}>
                <PHFWebEmploymentHistory />
              </div>
              <div className={styles.webItem5}>
                <PHFWebFormation />
              </div>
              <div className={styles.webItem6}>
                <PHFWebPersonalProjects />
              </div>
            </div>
            <div className={styles.webContainerCol}>
              <div className={styles.webItem7}>
                <PHFWebSocial />
              </div>
            </div>
          </div>
        </PHFWebContainer>
      </section>
    </div>
  );
}

export default Home;

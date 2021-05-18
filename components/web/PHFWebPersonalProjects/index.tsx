import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import styles from "./styles.module.scss";

export default function PHFWebPersonalProjects() {
  const { data } = useContext(DataContext);
  const { getText } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getText("PERSONAL_PROJECTS")}</h1>
      <div className={styles.projects}>
        {
          data.personal_projects.map((project, index) => (
            <div className={styles.project} key={index}>
              <i className={project.icon} />
              <p dangerouslySetInnerHTML={{__html: project.name}}></p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

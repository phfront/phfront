import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";
import styles from "./styles.module.scss";

export default function PHFPersonalProjects() {
  const { data } = useContext(DataContext);
  const { getText } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getText("PERSONAL_PROJECTS")}</h1>
      {
        data.personal_projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <i className={project.icon} />
            <div>
              <p>{project.name.replace(/<br>/g, ' ')}</p>
              <span>{getText(project.description)}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

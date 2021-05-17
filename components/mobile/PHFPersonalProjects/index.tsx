import { useContext } from "react";
import { DataContext } from "../../../context/data";
import styles from "./styles.module.scss";

export default function PHFPersonalProjects() {
  const { data } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Personal Projects</h1>
      {
        data.personal_projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <i className={project.icon} />
            <div>
              <p>{project.name.replace(/<br>/g, ' ')}</p>
              <span>{project.description}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

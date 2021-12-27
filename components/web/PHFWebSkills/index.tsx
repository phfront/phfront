import styles from "./styles.module.scss";
import PHFButton from "../../base/PHFButton";
import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { I18nContext } from "../../../context/i18n";

export default function PHFWebSkills() {
  const { data } = useContext(DataContext);
  const { getText } = useContext(I18nContext);

  function chunk(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getText("SKILLS")}</h1>
      {chunk(data.skills.main, 3).map((chunk, index) => (
        <div key={index} className={styles.skills}>
          {
            chunk.map((skillIcon, index2) => (
              <i key={`${index}${index2}`} className={skillIcon} />
            ))
          }
        </div>
      ))}
      {/* <div className={styles.more}>
        <PHFButton
          label={getText("SEE_MORE")}
          type="type4"
          variation="outline"
          click={() => {}}
        />
      </div> */}
    </div>
  );
}

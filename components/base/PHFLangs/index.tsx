import { useContext, useState } from "react";
import { I18nContext } from "../../../context/i18n";
import styles from "./styles.module.scss";

export type PHFLangsProps = {};

export default function PHFLangs({}: PHFLangsProps) {
  const [show, setShow] = useState<boolean>(false);
  const { lang, setLang } = useContext(I18nContext);

  return (
    <div className={styles.content}>
      <img
        onClick={() => setShow(!show)}
        className={styles.lang}
        src={`/svg/${lang}.svg`}
      />
      {show && (
        <div className={styles.selectLang}>
          <div
            onClick={() => {
              setShow(false);
              setLang("pt-BR");
            }}
          >
            <span>Português Brasil</span>
            <img className={styles.lang} src="/svg/pt-BR.svg" />
          </div>
          <div
            onClick={() => {
              setShow(false);
              setLang("en-US");
            }}
          >
            <span>English</span>
            <img className={styles.lang} src="/svg/en-US.svg" />
          </div>
        </div>
      )}
    </div>
  );
}

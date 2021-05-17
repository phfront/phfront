import styles from "./styles.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../../context/data";
import { format, parseISO, differenceInYears } from "date-fns";

export default function PHFWebPersonalInfo() {
  const { data } = useContext(DataContext);
  return (
    <div className={styles.container}>
      <p>{`${differenceInYears(
        new Date(),
        parseISO(data.detail.birthdate)
      )} years`}</p>
      <p>{format(parseISO(data.detail.birthdate), "LLLL d, y")}</p>
      <p>{data.detail.email}</p>
      <p>{data.detail.phone}</p>
    </div>
  );
}

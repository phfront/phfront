import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import { useContext } from 'react';
import { DataContext } from '../../../context/data';
import styles from './styles.module.scss';

export default function PHFWebFormation() {
  const { data } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FORMATION</h1>
      {
        data.formation.map((institution, index) => (
          <div className={styles.institution}>
            <p>{institution.institution}</p>
            <span>{institution.course}</span>
            <span>{format(parseISO(institution.start), "LLL y")} - {format(parseISO(institution.start), "LLL y")}</span>
          </div>
        ))
      }
    </div>
  )
}
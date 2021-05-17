import styles from './styles.module.scss';

export default function PHFWebFormation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FORMATION</h1>
      <div className={styles.institution}>
        <p>Fatec SJC</p>
        <span>System Analysis and Development</span>
        <span>Jan 2014 - Jan 2017</span>
      </div>
      <div className={styles.institution}>
        <p>ECOMPO</p>
        <span>Information Technology Technician</span>
        <span>Jan 2011 - Dec 2013</span>
      </div>
    </div>
  )
}
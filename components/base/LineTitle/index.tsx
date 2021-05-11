import styles from './styles.module.scss';

type LineTitleProps = {
    label?: string;
}

export default function LineTitle({ label }: LineTitleProps) {
    return (
        <div className={styles.container}>
            <h1>{label}</h1>
            <div></div>
        </div>
    )
}
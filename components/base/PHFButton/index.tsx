import styles from './styles.module.scss';

export type PHFButtonProps = {
    label: string;
    type: 'type1' | 'type2' | 'type3' | 'type4';
    variation: 'outline';
    click: () => any;
}

export default function PHFButton({ label, type, variation, click }: PHFButtonProps) {
    return (
        <button onClick={click} className={`${styles.button} ${styles[type]} ${styles[variation]}`}>{label}</button>
    )
}
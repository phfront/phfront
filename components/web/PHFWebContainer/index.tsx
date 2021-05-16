import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type PHFWebContainerProps = {
    children: ReactNode;
}

export default function PHFWebContainer({ children }: PHFWebContainerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.shadow}>
                {children}
            </div>
        </div>
    )
}
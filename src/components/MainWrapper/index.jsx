import React from 'react';
import styles from './styles.module.scss';

export const MainWrapper = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
import React from 'react';
import styles from './styles.module.scss';

export const EnigmaContent = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
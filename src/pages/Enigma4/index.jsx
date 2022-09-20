import React, { useEffect } from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaContent } from '../../components/EnigmaContent';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Enigma4 = () => {
    useEffect(() => {
        console.log('%cEle não é deste planeta, mas para chamá-lo, basta dizer...', 'color: #4be476')
    }, [])
    return (
        <MainWrapper>
            <Title title="Enigma 4" enigma={4} answer="enigma4"/>
            <EnigmaContent>
                <p className={styles.text}>Nesse lugar você não encontra êxitos, apenas erros.</p>
                <p className={styles.text}>É utilizado para te atentar com os problemas que você tem,</p>
                <p className={styles.text}>e ao mesmo tempo para te preocupar com eles...</p>
                <p className={styles.text}>Nele não contém muitas mensagens,</p>
                <p className={styles.text}>pode ser as do criador do site ou apenas os erros.</p>
                <p className={styles.text}>Será que podes descobrir?</p>
            </EnigmaContent>
        </MainWrapper>
    )
}
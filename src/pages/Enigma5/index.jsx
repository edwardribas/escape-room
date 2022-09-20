import React from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaContent } from '../../components/EnigmaContent';
import { Title } from '../../components/Title';
import { Lousa } from '../../assets/img';
import styles from './styles.module.scss';

export const Enigma5 = () => {
    return (
        <MainWrapper>
            <Title title="Enigma 5" enigma={5} answer="php"/>
            <EnigmaContent>
                <img src={Lousa} className={styles.lousa} alt="Lousa"/>
            </EnigmaContent>
        </MainWrapper>
    )
}
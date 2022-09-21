import React from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaContent } from '../../components/EnigmaContent';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Enigma2 = () => {
    return (
        <MainWrapper>
            <Title title="Enigma 2" enigma={2} answer="richarddutra110"/>
            <EnigmaContent>
                <p className={styles.special}>Entre linhas tortas, se formam diferentes respostas</p>
            </EnigmaContent>
        </MainWrapper>
    )
}
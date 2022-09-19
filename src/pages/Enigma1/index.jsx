import React from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaContent } from '../../components/EnigmaContent';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Enigma1 = () => {
    return (
        <MainWrapper>
            <Title title="Enigma 1" enigma={1} answer="t9jlk10jmnamlwebkit9loop"/>
            <EnigmaContent>
                <p className={styles.hidden}>
                    Que tal iniciarmos com um jogo de adivinhação para termos um bom começo?
                </p>
                <p className={styles.hidden}>
                    <span>É totalmente imóvel quando você não está por perto.</span>
                    <span>Costuma fazer mais barulho do que gato na madrugada.</span>
                    <span>Faz parte do dia do developer.</span>
                </p>
                <p className={styles.hidden}>
                    <b>Será que vocês conseguem adivinhar?</b>
                </p>
            </EnigmaContent>
        </MainWrapper>
    )
}
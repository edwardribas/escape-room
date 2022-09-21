import React from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaContent } from '../../components/EnigmaContent';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Enigma3 = () => {
    return (
        <MainWrapper className={styles.wrapper}>
            <Title title="Enigma 3" enigma={3} answer="kine220222"/>
            <EnigmaContent>
                <p className={styles.text}>Não iríamos existir sem esse elemento,</p>
                <p className={styles.text}>e também nem sequer conseguiríamos nos manter vivos sem respirar do outro elemento...</p>
                <p className={styles.text}>Você tem ambos dentro de seu corpo, mas não sente...</p>
                <p className={styles.text}>Você utiliza eles em boa parte das coisas que faz.</p>
                <p className={styles.text}>As coisas que você come, bebe e produz contêm a junção desses dois.</p>
                <p className={styles.text}>Você sabe do que eu estou falando!</p>
            </EnigmaContent>
        </MainWrapper>
    )
}
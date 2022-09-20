import React, { useRef, useState } from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaCard } from '../../components/EnigmaCard';
import { Loading } from '../../components/Loading';
import { RiSettings4Fill } from 'react-icons/ri';
import styles from './styles.module.scss';
import { Marshmello } from '../../assets/img';
import { useEnigmasInfo } from '../../hooks/useEnigmasInfo';

export const Desafios = () => {
    const SECRET_CODE = "ANDERSON SHOW";
    
    const { escapeRoomInfo, isEverythingCompleted, resetGame, currentTask } = useEnigmasInfo();
    const [isCodeVisible, setCodeVisibility] = useState(false);
    const Button = useRef();

    return (
        <MainWrapper>
            <h1 className={styles.title}>Escape Room</h1>
            {!isEverythingCompleted && (
                <p style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: '-60px'
                }}>
                    Enigma atual: {currentTask}
                </p>
            )}

            {escapeRoomInfo
                ? !isEverythingCompleted
                    ? (
                        <div className={styles.enigmas_wrapper}>

                            {escapeRoomInfo.map((e, i) => (
                                <EnigmaCard
                                    icon={<RiSettings4Fill/>}
                                    number={i+1}
                                    isCompleted={e.isCompleted}
                                    isCurrentPuzzle={e.isCurrentPuzzle}
                                    key={i}
                                    link={e.link}
                                />
                            ))}
                        </div>
                    )
                    : (
                        <div className={styles.thanks_banner}>
                            <h1>Parabéns aos jogadores!</h1>
                            <p>
                                Quem diria que vocês realmente conseguiriam... 
                                Vocês estarão livres para sair após mostrarem o código para o guardião da sala.
                            </p>

                            <div className={styles.buttons}>
                                <button ref={Button} onClick={() => setCodeVisibility(!isCodeVisible)}>
                                    {!isCodeVisible
                                        ? "Revelar código"
                                        : SECRET_CODE}
                                </button>
                                {isCodeVisible && (
                                    <button 
                                        onClick={() => {
                                            resetGame();
                                            window.location.reload();
                                        }}
                                    >
                                        Zerar jogo
                                    </button>
                                )}
                            </div>

                            <div className={styles.illustration}>
                                <Marshmello/>
                            </div>
                        </div>
                    )
                : (
                    <Loading/>
                )
            }
        </MainWrapper>
    )
}
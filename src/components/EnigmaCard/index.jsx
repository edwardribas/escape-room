import React from 'react';
import styles from './styles.module.scss';
import { HiOutlineClock } from 'react-icons/hi';
import { BsCheck2All } from 'react-icons/bs';
import { MdOutlineLockClock } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const EnigmaCard = ({
    icon,
    number,
    isCompleted,
    isCurrentPuzzle,
    link
}) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.icon}>
                {icon}
            </span>

            <h2>
                Enigma {number}
            </h2>

            <p>
                {isCompleted && (
                    "Este enigma já está resolvido! Foque em resolver os próximos."
                )}

                {isCurrentPuzzle && (
                    "Você deve resolver esse enigma para continuar."
                )}

                {!isCurrentPuzzle && !isCompleted && (
                    "Resolva os enigmas anteriores para chegar desbloquear essa fase!"
                )}
            </p>

            <div>
                <span className={styles.status_icon}>
                    {!isCompleted && isCurrentPuzzle && ( <HiOutlineClock/> )}
                    {isCompleted && ( <BsCheck2All/> )}
                    {!isCompleted && !isCurrentPuzzle && ( <MdOutlineLockClock/> )}
                </span>

                <p className={styles.status_desc}>
                    {!isCompleted && isCurrentPuzzle && (
                        "Enigma em aberto"
                    )}
                    {isCompleted && (
                        "Desafio concluído"
                    )}
                    {!isCompleted && !isCurrentPuzzle && (
                        "Enigma bloqueado"
                    )}
                </p>
            </div>
            
            <div className={styles.link}>
                {!isCompleted && isCurrentPuzzle && (
                    <Link to={link}>
                        <button>
                            Ver enigma
                        </button>
                    </Link>
                )}

                {!isCurrentPuzzle && (
                    <button disabled>
                        {isCompleted
                            ? "Completo"
                            : "Bloqueado"
                        }
                    </button>
                )}
            </div>
        </div>
    )
}
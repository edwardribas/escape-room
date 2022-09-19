import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useEnigmasInfo } from '../../hooks/useEnigmasInfo';
import { MdOutlineChevronLeft } from 'react-icons/md';
import { BsChatFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Title = ({enigma, title, answer}) => {
    const { updateEscapeRoom } = useEnigmasInfo();
    const navigate = useNavigate();
    const [isInputVisible, setInputVisibility] = useState(false);
    const Input = useRef();

    window.onkeydown = (e) => {
        if (Input.current && Input.current.value) {
            const isFocused = Input.current === document.activeElement;
            const isCorrect = Input.current.value.toLowerCase() === answer.toLowerCase();
            
            if (e.key === "Enter" && isFocused) {
                if (isCorrect) {
                    updateEscapeRoom(enigma);
                }
                // ! Devolutiva pro usuário em caso de erro
            }
        }
    }

    return (
        <div className={styles.title_wrapper}>
            <span className={styles.icon} onClick={() => navigate('../')}>
                <MdOutlineChevronLeft/>
            </span>
            <h1 className={styles.title}>
                {title}
            </h1>

            <div className={styles.form}>
                <input
                    placeholder='Sua resposta'
                    className={isInputVisible ? styles.active : undefined}
                    ref={Input}
                />
                <span
                    className={styles.icon}
                    onClick={() => setInputVisibility(!isInputVisible)}
                >
                    <BsChatFill/>
                </span>
            </div>
        </div>
    )
}
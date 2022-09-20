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
    const InputBox = useRef();

    window.onkeydown = (e) => {
        if (InputBox.current && InputBox.current.value) {
            const isFocused = InputBox.current === document.activeElement;
            const isCorrect = InputBox.current.value.toLowerCase() === answer.toLowerCase();
            
            if (e.key === "Enter" && isFocused && isCorrect)
                updateEscapeRoom(enigma);
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
                    ref={InputBox}
                />
                <span
                    className={styles.icon}
                    onClick={() => setInputVisibility(!isInputVisible) }
                >
                    <BsChatFill/>
                </span>
            </div>
        </div>
    )
}
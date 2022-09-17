import React, { useEffect, useState } from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaCard } from '../../components/EnigmaCard';
import { Loading } from '../../components/Loading';
import { RiSettings4Fill } from 'react-icons/ri';
import styles from './styles.module.scss';

export const Desafios = () => {
    const isEverythingCompleted = false;
    const storedEscapeRoomInfo = localStorage.getItem('escapeRoomInfo');
    const [escapeRoomInfo, setEscapeRoomInfo] = useState(false);

    useEffect(() => {
        if (storedEscapeRoomInfo) {
            setEscapeRoomInfo(JSON.parse(storedEscapeRoomInfo));
        } else {
            localStorage.setItem('escapeRoomInfo', JSON.stringify(
                [
                    { test: 1 },
                    { test: 2 },
                    { test: 3 },
                ]
            ))
        }
    }, []) // eslint-disable-line
    

    useEffect(() => {
        console.log(escapeRoomInfo);
    }, [escapeRoomInfo])

    return (
        <MainWrapper>
            <h1 className={styles.title}>Escape Room</h1>

            {escapeRoomInfo
                ? !isEverythingCompleted
                    ? (
                        <div className={styles.enigmas_wrapper}>
                            <EnigmaCard
                                icon={<RiSettings4Fill/>}
                                number={1}
                                isCompleted={true}
                                isCurrentPuzzle={false}
                                link="/1"
                            />
                            <EnigmaCard
                                icon={<RiSettings4Fill/>}
                                number={2}
                                isCompleted={true}
                                isCurrentPuzzle={false}
                                link="/2"
                            />
                            <EnigmaCard
                                icon={<RiSettings4Fill/>}
                                number={3}
                                isCompleted={false}
                                isCurrentPuzzle={true}
                                link="/3"
                            />
                        </div>
                    )
                    : (
                        <div className={styles.thanks_banner}>
                            
                        </div>
                    )
                : (
                    <Loading/>
                )
            }
        </MainWrapper>
    )
}
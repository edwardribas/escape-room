import {useState, useEffect } from 'react';


export const useEnigmasInfo = () => {
    const storedEscapeRoomInfo = localStorage.getItem('escapeRoomInfo');
    const [escapeRoomInfo, setEscapeRoomInfo] = useState(false);
    const [currentTask, setCurrentTask] = useState(0);
    const [isEverythingCompleted, setIsEverythingCompleted] = useState(false);

    const updateEscapeRoom = (id) => {
        if (escapeRoomInfo) {
            const newEscapeRoomInfo = [...escapeRoomInfo];
            const oldItem = newEscapeRoomInfo[id-1];
            const newItem = newEscapeRoomInfo[id];
            oldItem.isCompleted = true;
            oldItem.isCurrentPuzzle = false
            if (newItem) {
                newItem.isCompleted = false;
                newItem.isCurrentPuzzle = true;
            }
            setCurrentTask(id+1);
            localStorage.setItem('escapeRoomInfo', JSON.stringify([...newEscapeRoomInfo]));
            setEscapeRoomInfo(JSON.parse(storedEscapeRoomInfo));
            window.location.reload();
        }
    }

    const resetGame = () => {
        localStorage.setItem('escapeRoomInfo', JSON.stringify(
            [
                {
                    isCompleted: false,
                    isCurrentPuzzle: true,
                    link: "/good-luck-bro-have-luck"
                },
                {
                    isCompleted: false,
                    isCurrentPuzzle: false,
                    link: "/did-you-really-think-that-you-would-discover-this-link"
                },
                {
                    isCompleted: false,
                    isCurrentPuzzle: false,
                    link: "/actually-you-are-doing-pretty-good"
                },
                {
                    isCompleted: false,
                    isCurrentPuzzle: false,
                    link: "/wow-you-really-want-to-escape-this-room"
                },
                {
                    isCompleted: false,
                    isCurrentPuzzle: false,
                    link: "/well-i-really-want-to-eat-something-right-now"
                }
            ]
        ));
        const parsedInfo = JSON.parse(localStorage.getItem('escapeRoomInfo'));
        setEscapeRoomInfo([...parsedInfo]);
    }

    useEffect(() => {
        if (escapeRoomInfo) {
            const getCompletedTasks = escapeRoomInfo.filter(e => e.isCompleted === true);
            const currentPuzzle = escapeRoomInfo.findIndex(e => e.isCurrentPuzzle === true)+1;
            if (getCompletedTasks.length === 5) setIsEverythingCompleted(true)
            setCurrentTask(currentPuzzle);
        }
    }, [escapeRoomInfo])

    useEffect(() => {
        if (storedEscapeRoomInfo) {
            setEscapeRoomInfo(JSON.parse(storedEscapeRoomInfo));
        } else {
            resetGame();
        }
    }, []) // eslint-disable-line

    return ({
        storedEscapeRoomInfo,
        escapeRoomInfo,
        isEverythingCompleted,
        setEscapeRoomInfo,
        currentTask,
        resetGame,
        updateEscapeRoom
    })
}
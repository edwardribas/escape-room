import React from 'react';
import { useEnigmasInfo } from '../hooks/useEnigmasInfo';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { Desafios } from '../pages/Desafios';
import { Enigma1 } from '../pages/Enigma1';
import { Enigma2 } from '../pages/Enigma2';
import { Enigma3 } from '../pages/Enigma3';
import { Enigma4 } from '../pages/Enigma4';
import { Enigma5 } from '../pages/Enigma5';


export const Router = () => {
    const { isEverythingCompleted, currentTask } = useEnigmasInfo();

    const links = [
        "good-luck-bro-have-luck",
        "did-you-really-think-that-you-would-discover-this-link",
        "actually-you-are-doing-pretty-good",
        "wow-you-really-want-to-escape-this-room",
        "well-i-really-want-to-eat-something-right-now"
    ]
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Desafios/>}/>
                {!isEverythingCompleted && (<>
                    {currentTask === 1 && (
                        <Route path={links[currentTask-1]} element={<Enigma1/>}/>
                    )}

                    {currentTask === 2 && (
                        <Route path={links[currentTask-1]} element={<Enigma2/>}/>
                    )}

                    {currentTask === 3 && (
                        <Route path={links[currentTask-1]} element={<Enigma3/>}/>
                    )}

                    {currentTask === 4 && (
                        <Route path={links[currentTask-1]} element={<Enigma4/>}/>
                    )}

                    {currentTask === 5 && (
                        <Route path={links[currentTask-1]} element={<Enigma5/>}/>
                    )}
                </>)}

                <Route path="/*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </BrowserRouter>
    )
}
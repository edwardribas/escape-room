import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/styles/index.module.scss';

// Pages
import { Desafios } from './pages/Desafios';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Desafios/>}/>
            <Route path="/*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
)
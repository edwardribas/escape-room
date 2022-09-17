import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.module.scss';
import { Router } from './router';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <Router/>
    </>
)
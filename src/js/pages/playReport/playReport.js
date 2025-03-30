
import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './playReport.scss';

import store from './../../redux/store.js';

import { ScheduleFactApp } from './../../components/ScheduleFactApp/ScheduleFactApp.js';

console.dir('playReport');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScheduleFactApp />
        </BrowserRouter>
    </Provider>
);
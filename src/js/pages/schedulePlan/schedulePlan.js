
import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './schedulePlan.scss';

import store from './../../redux/store.js';

import { SchedulePlanApp } from './../../components/SchedulePlanApp/SchedulePlanApp.js';

console.dir('schedulePlan');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <SchedulePlanApp />
        </BrowserRouter>
    </Provider>
);
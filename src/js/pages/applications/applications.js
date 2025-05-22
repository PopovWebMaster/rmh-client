import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './applications.scss';

import store from './../../redux/store.js';

import { ApplicationsApp } from './../../components/ApplicationsApp/ApplicationsApp.js';

console.dir('applications');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ApplicationsApp />
        </BrowserRouter>
    </Provider>
);



import React  from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './accessIsClosed.scss';

import store from './../../redux/store.js';

import { AccessIsClosedApp } from './components/AccessIsClosedApp/AccessIsClosedApp.js';

console.dir('accessIsClosed');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <AccessIsClosedApp />
    </Provider>
);
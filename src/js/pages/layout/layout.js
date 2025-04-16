
import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './layout.scss';

import store from './../../redux/store.js';

import { LayoutApp } from './../../components/LayoutApp/LayoutApp.js';

console.dir('layout');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <LayoutApp />
        </BrowserRouter>
    </Provider>
);
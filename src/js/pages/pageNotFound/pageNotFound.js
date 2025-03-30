// pageNotFound

import React  from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './pageNotFound.scss';

import { PageContainer } from './../../components/PageContainer/PageContainer.js';
import store from './../../redux/store.js';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PageContainer className = 'pageNotFound'>
            <div>
                <h1>404</h1>
                <p>                    
                    Страница не найдена!
                </p>
            </div>
        </PageContainer>
    </Provider>


);
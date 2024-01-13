import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import {store} from './store'

const rootContainer = document.getElementById('root')!;

const root = createRoot(rootContainer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
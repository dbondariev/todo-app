import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

const rootContainer = document.getElementById('root')!;

const root = createRoot(rootContainer);

root.render(<App />);

// If you want your app to work offline and load faster,
// you can change unregister() to register() below.
// Note: This comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
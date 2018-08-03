import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './scripts/App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';
import Localization from './scripts/localization';

import { Provider } from 'react-redux';
import store from './store';

Localization.setLanguage('cn');

const u = store.subscribe(() =>
    {console.log('monitoring store: store.getState()');
    console.log(store.getState());}
);

ReactDOM.render((
        <Provider store = {store}>
            <BrowserRouter><App /></BrowserRouter>
        </Provider>
    ), document.getElementById('root'));

registerServiceWorker();

u();
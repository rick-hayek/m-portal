import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './scripts/App';
import {BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Localization from './scripts/localization';

Localization.setLanguage('cn');

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

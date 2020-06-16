import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from 'App';
import 'i18nLoader';

// Import all locales here.  English is not required.
import 'moment/locale/es';

const appElement = document.createElement('div');
appElement.id = 'app';
document.body.appendChild(appElement);

ReactDOM.render(<App />, appElement);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import './style/style.scss';

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

reportWebVitals(sendToVercelAnalytics);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { history } from './redux/store/store';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from  'react-redux';
import store from './redux/store/store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>        
            <App />        
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

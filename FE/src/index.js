import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import store from './app/store'
import { createBrowserHistory } from 'history'
import {Router} from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <App/>
      </Router>
    </Provider>
,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

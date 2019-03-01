import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import middlewares from './middlewares'
import {AppProvider} from './provider'

const store = createStore(reducer,middlewares());

ReactDOM.render(<AppProvider>  <Provider store={store}><Routes /></Provider></AppProvider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 
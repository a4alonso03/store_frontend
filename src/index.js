/** React **/
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/** Styling **/
import './index.css';

/** Redux **/
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux';
import Reducer from './redux/Reducer';

/** Components **/
import App from './App';

/** Routing **/
import {BrowserRouter} from 'react-router-dom';


let customStore = Redux.createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(customStore.getState());

ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={customStore}>
            <App/>
        </ReactRedux.Provider>
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import todoApp from './reducers';
import App from './components/app';


let store = createStore(todoApp)


ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById("maincontent"));
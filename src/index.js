import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocalStorageExample from './pages/LocalStorageExample';
import FirebaseExample from './pages/FirebaseExample';
import About from './pages/About';
import { Redirect, Router, Route, hashHistory } from 'react-router';
import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Redirect from="/" to="/local-storage" />
            <Route path="/" component={App}>
                <Route path="local-storage" component={LocalStorageExample} />
                <Route path="firebase" component={FirebaseExample} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    ),
    app
);

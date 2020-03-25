import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router>
    <Route path="/" exact component={Home} />
    {/* <Route path="/login" component={LogPage} /> */}
    {/* <Route path="/register" component={RegisterPage} /> */}
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

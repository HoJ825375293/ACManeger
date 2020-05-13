import React from 'react';
import ReactDOM from 'react-dom';
import LogPage from './components/LogPage'
import AdminPage from './components/AdminPage'
import UserPage from './components/UserPage'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router>
    <Route path="/userPage" component={UserPage} />
    <Route path="/" exact component={AdminPage}/>
    {/* <Route path="/login" component={LogPage} /> */}
    {/* <Route path="/register" component={RegisterPage} /> */}
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

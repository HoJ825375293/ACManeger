import React from 'react';
import ReactDOM from 'react-dom';
import LogPage from './components/LogPage'
import AdminPage from './components/AdminPage'
import UserPage from './components/UserPage'
import ManagerPage from './components/ManagerPage'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router>
    <Route path="/" exact component={LogPage} />
    <Route path="/userPage" exact component={UserPage} />
    <Route path="/AdminPage" exact component={AdminPage}/>
    <Route path="/ManagerPage" exact component={ManagerPage}/>
    {/* <Route path="/login" component={LogPage} /> */}
    {/* <Route path="/register" component={RegisterPage} /> */}
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

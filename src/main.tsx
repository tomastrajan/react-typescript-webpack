// Styles
import 'bootswatch/paper/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// Custom styles
import './main.css';

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import * as AuthService from './auth/auth.service';

import AppLayout from './app/app.layout';
import TodoContainer from './todo/todo.container';

AuthService.init();

ReactDOM.render((
    <Router>
        <Route path="/" component={AppLayout}>
            <IndexRoute component={TodoContainer}/>
        </Route>
        <Redirect from="*" to="/"/>
    </Router>
), document.getElementById('content'));

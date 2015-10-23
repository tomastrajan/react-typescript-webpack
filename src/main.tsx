// Styles
import 'bootswatch/paper/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// Custom styles
import './main.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import * as promise from 'bluebird';

import * as AuthService from './auth/auth.service';

import AppLayout from './app/app.layout';
import TodoContainer from './todo/todo.container';

Promise.resolve(AuthService.init())
    .then(renderRouter);

function renderRouter() {
    ReactDOM.render((
        <Router>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={TodoContainer}/>
                <Route path="/todo" component={TodoContainer}/>
            </Route>
        </Router>
    ), document.getElementById('content'));
}




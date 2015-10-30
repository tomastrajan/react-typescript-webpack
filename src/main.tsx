import 'bootswatch/paper/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './main.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import * as InitAppService from './app/init.app.service';

import MainComponent from './main.component';
import TodoContainer from './todo/ui/todo.container.tsx';

InitAppService.init().then(renderRouter);

function renderRouter() {
    ReactDOM.render((
        <Router>
            <Route path="/" component={MainComponent}>
                <IndexRoute component={TodoContainer}/>
                <Route path="/todo" component={TodoContainer}/>
            </Route>
        </Router>
    ), document.getElementById('content'));
}




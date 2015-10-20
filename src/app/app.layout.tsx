import * as React from "react";
import { Router, Route } from 'react-router';
import { Paper } from 'material-ui';

import TodoCounter from '../todo/todo.counter';

export default class App extends React.Component<AppProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="javascript:void(0)">Todo FluXXX™</a>
                        </div>
                        <TodoCounter />
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
                <footer className="footer">
                    <Paper zDepth={2}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-medium fa-lg"></i>
                                    <a href="https://medium.com/@tomastrajan">Medium</a>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-github fa-lg"></i>
                                    <a href="https://github.com/tomastrajan">Github</a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-twitter fa-lg"></i>
                                    <a href="https://twitter.com/tomastrajan">Twitter</a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-stack-overflow fa-lg"></i>
                                    <a href="http://stackoverflow.com/users/2650426/tomastrajan?tab=profile">StackOverflow</a>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-muted text-center">Tomas Trajan 2015</p>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </footer>
            </div>
        );
    }

}

interface AppProps {
    children: any
}